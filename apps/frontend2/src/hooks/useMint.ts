import { useState } from 'react'
import { getWalletClient } from '@wagmi/core'
import { m3terImageUrl } from '#/utils/constants'
import { approve, mint } from '#/smart-contracts/actions'
import { encodePacked, hexToBigInt, keccak256 } from 'viem'
import { createTokenMetadata } from '#/utils/token-metadata'
import { wagmiNewConfig } from '#/integrations/wagmi/config'
import type { MintTokensParams, MintTxStatus } from '#/utils/types'
import { trpc } from '#/config/trpc-client'

export function useMint() {
  const [currentStep, setCurrentStep] = useState('')
  const [mintTxStatus, setMintTxStatus] = useState<MintTxStatus>({
    status: 'idle',
  })
  const [amount, setAmount] = useState(0)
  const [externalTokenId, setExternalTokenId] = useState<bigint>(0n)

  const mintTokens = async ({
    supply,
    tokenId,
    stopTime,
    description,
    walletAddress,
  }: MintTokensParams) => {
    try {
      setAmount(Number(supply))

      const hash = keccak256(
        encodePacked(
          ['uint256', 'uint256', 'uint256'],
          [tokenId, supply, BigInt(stopTime)],
        ),
      )

      setExternalTokenId(hexToBigInt(hash))

      setCurrentStep('Approving M3ter for transaction...')

      const walletClient = await getWalletClient(wagmiNewConfig)

      const approveResult = await approve(walletAddress, tokenId, walletClient)

      if (approveResult.status === 'error') {
        setMintTxStatus(approveResult)
        return approveResult
      }

      setCurrentStep('Preparing metadata...')

      const imageBase64Url = await trpc.getNounsBase64URL.query({
        imageUrl: m3terImageUrl,
      })

      const { svgString, metadataPart } = createTokenMetadata({
        creator: walletAddress,
        description,
        stopTime,
        supply,
        tokenId,
        imageUrl: imageBase64Url,
      })

      setCurrentStep('Uploading NFT image to Arweave...')

      const imageUrl = await trpc.arweave.uploadSvg.mutate({
        name: metadataPart.name,
        image: svgString,
      })

      const metadata = {
        ...metadataPart,
        image: imageUrl,
      }

      setCurrentStep('Uploading metadata to Arweave...')

      const uri = await trpc.arweave.uploadMetadata.mutate(metadata)

      setCurrentStep('Minting tokens and bond...')

      const result = await mint(
        {
          supply: BigInt(supply),
          m3terId: tokenId,
          stopTime: BigInt(stopTime),
          uri,
        },
        walletAddress,
        walletClient,
      )

      setMintTxStatus(result)

      return result
    } catch (err) {
      const result = {
        status: 'error' as const,
        error:
          err instanceof Error ? err.message : 'An unexpected error occurred.',
      }

      setMintTxStatus(result)

      return result
    }
  }

  return {
    mintTokens,
    currentStep,
    mintTxStatus,
    amount,
    externalTokenId,
  }
}

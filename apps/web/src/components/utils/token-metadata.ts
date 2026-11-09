import { format } from 'date-fns'
import { checksumAddress, encodePacked, keccak256, type Address } from 'viem'
import { constructSvg } from './svg-constructor'
import { MyToken } from '@/config/smart-contracts/MyToken/MyToken'
import { TRS } from '@/config/smart-contracts/TRS/TRS'

interface Params {
  tokenId: bigint
  supply: bigint
  stopTime: number
  description: string
  creator: Address
  imageUrl: string
}

export function createTokenMetadata({
  tokenId,
  supply,
  stopTime,
  description,
  creator,
  imageUrl,
}: Params) {
  const name = `TRS-#${Number(tokenId)}-${format(stopTime * 1000, 'yyyy-MM-dd')}`

  const hash = keccak256(
    encodePacked(
      ['uint256', 'uint256', 'uint256'],
      [tokenId, supply, BigInt(stopTime)],
    ),
  )

  const svgString = constructSvg({
    name,
    meterId: Number(tokenId),
    stopTime: stopTime,
    m3terContract: MyToken.address,
    trsContract: TRS.address,
    imageUrl,
  })

  // To-do: Add hextToBigint on new contract deployment
  //const identifier = hexToBigInt(hash);
  const metadataPart = {
    name,
    description,
    attributes: [
      { display_type: 'date', trait_type: 'stop_time', value: stopTime },
      { trait_type: 'creator', value: checksumAddress(creator) },
      { trait_type: 'token_id', value: hash },
    ],
  }
  return {
    metadataPart,
    svgString,
  }
}

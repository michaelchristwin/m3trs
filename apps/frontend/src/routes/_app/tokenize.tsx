import { createFileRoute } from '@tanstack/react-router'
import { useMint } from '#/hooks/useMint'
import { CreateTokenForm } from '#/components/CreateTokenForm'
import { MintDialog } from '#/components/MintDialog'
import { useState } from 'react'
import type { ModalState } from '#/utils/types'

export const Route = createFileRoute('/_app/tokenize')({
  component: RouteComponent,
})

function RouteComponent() {
  const [modalState, setModalState] = useState<ModalState>('minting')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { mintTokens, currentStep, mintTxStatus, amount, externalTokenId } =
    useMint()
  return (
    <div className="max-w-4xl mx-auto mb-15">
      <title>Tokenize</title>
      <meta name="description" content="" />
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold font-headline text-on-surface mb-2 tracking-tight">
          Tokenize In 3 Steps
        </h1>
      </div>

      <CreateTokenForm
        modalState={modalState}
        setIsModalOpen={setIsModalOpen}
        setModalState={setModalState}
        mintTokens={mintTokens}
      />
      <MintDialog
        isOpen={isModalOpen}
        mintTxStatus={mintTxStatus}
        modalState={modalState}
        supply={amount}
        tokenId={externalTokenId}
        visibleStatus={currentStep}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

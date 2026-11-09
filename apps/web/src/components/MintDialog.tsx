import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '#/components/ui/alert-dialog'
import { X } from 'lucide-react'
import type { MintTxStatus, ModalState } from '#/utils/types'
import { TRS } from '#/config/smart-contracts/TRS/TRS'

interface DialogParams {
  modalState: ModalState
  visibleStatus: string
  mintTxStatus: MintTxStatus
  isOpen: boolean
  supply: number
  tokenId: bigint
  onClose: () => void
}

export function MintDialog({
  modalState,
  visibleStatus,
  mintTxStatus,
  isOpen,
  tokenId,
  onClose,
}: DialogParams) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="border-white/10 p-6 sm:p-10 pointer-events-auto w-[calc(100%-2rem)] sm:w-full max-w-md sm:max-w-lg">
        <AlertDialogHeader className="hidden">
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div>
          {/* MINTING */}
          {modalState === 'minting' && (
            <div className="animate-[fade-in_.35s_ease-out_forwards]">
              <AlertDialogCancel
                onClick={onClose}
                className="rounded-[100%] float-end border border-white/10 bg-white/5 w-8 h-8 sm:w-10 sm:h-10 text-sm font-medium text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
              >
                <X size={16} className="sm:hidden" />
                <X size={18} className="hidden sm:block" />
              </AlertDialogCancel>

              <div className="flex w-full flex-col items-center">
                <svg
                  className="mb-8 sm:mb-12 -rotate-45 w-30 h-30 sm:w-45 sm:h-45"
                  viewBox="0 0 180 180"
                  fill="none"
                >
                  <circle
                    cx="90"
                    cy="90"
                    r="20"
                    fill="#279b37"
                    className="animate-[radar-fade_1.96s_linear_infinite]"
                  />
                  <path
                    d="M 90,40 A 50,50 0 0,1 140,90"
                    stroke="#279b37"
                    strokeWidth="8"
                    strokeLinecap="butt"
                    className="animate-[radar-fade_1.96s_linear_infinite_.196s]"
                  />
                  <path
                    d="M 90,10 A 80,80 0 0,1 170,90"
                    stroke="#279b37"
                    strokeWidth="8"
                    strokeLinecap="butt"
                    className="animate-[radar-fade_1.96s_linear_infinite_.392s]"
                  />
                </svg>

                <div className="flex items-center gap-3 text-xs sm:text-sm italic text-[#279b37] transition-opacity duration-300 opacity-100 text-center">
                  <svg
                    className="h-4 w-4 shrink-0 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>{visibleStatus}</span>
                </div>
              </div>
            </div>
          )}

          {/* SUCCESS */}
          {modalState === 'success' && (
            <div className="flex w-full flex-col items-center animate-[fade-in_.35s_ease-out_forwards]">
              <div className="mb-4 sm:mb-6 animate-[scale-up_.35s_ease-out_forwards]">
                <svg
                  width="56"
                  height="56"
                  className="sm:w-18 sm:h-18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#279b37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>

              <h2 className="mb-2 text-base sm:text-lg font-semibold text-white text-center">
                Position Minted
              </h2>
              <p className="mb-6 px-2 sm:px-4 text-center text-xs sm:text-[13px] text-white/50">
                Your M3TRS revenue position has been successfully minted
                on-chain.
              </p>

              <div className="flex w-full flex-col gap-3">
                {mintTxStatus.status === 'success' && (
                  <a
                    href={`https://opensea.io/item/zora/${TRS.address}/${tokenId.toString()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-lg bg-[#279b37] px-4 sm:px-6 py-2.5 sm:py-3 text-center text-sm sm:text-base font-semibold text-white transition-colors duration-150 hover:bg-[#34b348]"
                  >
                    List on OpenSea →
                  </a>
                )}
              </div>
            </div>
          )}

          {/* ERROR */}
          {modalState === 'error' && (
            <div className="flex w-full flex-col items-center animate-[fade-in_.35s_ease-out_forwards]">
              <div className="mb-4 sm:mb-6 animate-[scale-up_.35s_ease-out_forwards]">
                <svg
                  width="56"
                  height="56"
                  className="sm:w-18 sm:h-18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e53935"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>

              <h2 className="mb-2 text-base sm:text-lg font-semibold text-white text-center">
                Minting Failed
              </h2>
              {mintTxStatus.status === 'error' && (
                <p className="mb-6 sm:mb-8 px-2 sm:px-4 text-center text-xs sm:text-[13px] text-white/50">
                  {mintTxStatus.error}
                </p>
              )}

              <div className="flex w-full flex-col gap-3">
                <AlertDialogCancel
                  onClick={onClose}
                  className="w-full rounded-lg border border-white/15 bg-red-200/5! px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-colors duration-150 hover:bg-white/5"
                >
                  Dismiss
                </AlertDialogCancel>
              </div>
            </div>
          )}
        </div>

        <AlertDialogFooter className="hidden">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

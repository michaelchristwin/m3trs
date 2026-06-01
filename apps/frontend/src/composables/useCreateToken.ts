import { ref } from "vue";

export function useCreateToken() {
  const modalState = ref<import("@/utils/types").ModalState>("minting");
  const mintTxStatus = ref<import("@/utils/types").MintTxStatus>({
    success: false,
    error: "",
  });
  const visibleStatus = ref("Preparing transaction...");

  const createToken = async () => {};

  return {
    modalState,
    visibleStatus,
    mintTxStatus,
    createToken,
  };
}

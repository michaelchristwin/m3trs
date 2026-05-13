import type { Address } from "viem";
import { MeterNFT_ABI } from "./MeterNFT-ABI";

export function setMeterNFT(address: Address) {
  return { address, abi: MeterNFT_ABI } as const;
}

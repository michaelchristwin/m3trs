import { createPublicClient, http, type Chain } from "viem";
import { VIEM_CHAIN } from "./wagmi";

export const publicClient = createPublicClient({
  chain: VIEM_CHAIN as Chain,
  transport: http(),
});

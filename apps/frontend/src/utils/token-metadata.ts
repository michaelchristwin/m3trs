import { format } from "date-fns";
import { checksumAddress, encodePacked, keccak256, type Address } from "viem";
import { constructSvg } from "./svg-constructor";
import { MyToken } from "@/config/smart-contracts/MyToken/MyToken";
import { TRS } from "@/config/smart-contracts/TRS/TRS";

interface Params {
  tokenId: bigint;
  supply: bigint;
  stopTime: number;
  description: string;
  creator: Address;
}
export async function createTokenMetadata({
  tokenId,
  supply,
  stopTime,
  description,
  creator,
}: Params) {
  const name = `TRS-#${Number(tokenId)}-${format(stopTime * 1000, "yyyy-MM-dd")}`;

  const hash = keccak256(
    encodePacked(
      ["uint256", "uint256", "uint256"],
      [tokenId, supply, BigInt(stopTime)],
    ),
  );

  // To-do: Add hextToBigint on new contract deployment
  //const identifier = hexToBigInt(hash);
  const svgString = constructSvg({
    name,
    meter_id: Number(tokenId),
    stop_time: stopTime,
    m3ter_contract: MyToken.address,
    trs_contract: TRS.address,
  });

  const metadata = {
    name,
    description,
    attributes: [
      { display_type: "date", trait_type: "stop_time", value: stopTime },
      { trait_type: "creator", value: checksumAddress(creator) },
      { trait_type: "token_id", value: hash },
    ],
  };
  return {
    metadata,
    svgString,
  };
}

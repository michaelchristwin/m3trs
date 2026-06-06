import { format } from "date-fns";
import { checksumAddress, encodePacked, keccak256, type Address } from "viem";
import { constructSvg } from "./svg-constructor";
import { MyToken } from "@/config/smart-contracts/MyToken/MyToken";
import { TRS } from "@/config/smart-contracts/TRS/TRS";

const m3terImageUrl = `https://nouns.build/api/renderer/stack-images?contractAddress=
          0x00a38a13bc21012663843f71bc472ca429e9d02e&tokenId=0&images=ipfs%3a%2f%2fbafybeid4n57
          vjp3ctowfsvmsz7deps5ob4k6qwat6u3dg5hwlj6anfoet4%2f0-backgrounds%2fbg-17.svg&images=ip
          fs%3a%2f%2fbafybeid4n57vjp3ctowfsvmsz7deps5ob4k6qwat6u3dg5hwlj6anfoet4%2f1-eyes%2feye
          s-frame2.svg&images=ipfs%3a%2f%2fbafybeid4n57vjp3ctowfsvmsz7deps5ob4k6qwat6u3dg5hwlj6
          anfoet4%2f2-mouths%2fmouth-square2.svg`;

interface Params {
  tokenId: bigint;
  supply: bigint;
  stopTime: number;
  description: string;
  creator: Address;
}

export function createTokenMetadata({
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

  const svgString = constructSvg({
    name,
    meterId: Number(tokenId),
    stopTime: stopTime,
    m3terContract: MyToken.address,
    trsContract: TRS.address,
    imageUrl: m3terImageUrl,
  });

  // To-do: Add hextToBigint on new contract deployment
  //const identifier = hexToBigInt(hash);
  const metadataPart = {
    name,
    description,
    attributes: [
      { display_type: "date", trait_type: "stop_time", value: stopTime },
      { trait_type: "creator", value: checksumAddress(creator) },
      { trait_type: "token_id", value: hash },
    ],
  };
  return {
    metadataPart,
    svgString,
  };
}

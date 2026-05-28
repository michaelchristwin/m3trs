import { NFTEndpoint, listingsEndpoint } from "./config";
import type { OpenseaQueryModel } from "./model";

export abstract class OpenseaQuery {
  static async getNFTByAccount({
    owner,
    collection,
  }: OpenseaQueryModel["NFTByAccountParams"]) {
    return await NFTEndpoint.getNftsByAccount({
      collection: collection,
      chain: "zora",
      address: owner,
    });
  }
  static async getNFTByOwners({
    owner,
    identifier,
    limit,
  }: OpenseaQueryModel["NFTByOwnersParams"]) {
    return await NFTEndpoint.getNftOwners({
      address: owner,
      chain: "zora",
      identifier,
      limit: limit || 20,
    });
  }
  static async getNFTsByContract({
    address,
    limit,
  }: OpenseaQueryModel["NFTsByContractParams"]) {
    return await NFTEndpoint.getNftsByContract({
      chain: "zora",
      address: address,
      limit: limit || 20,
    });
  }
  static async getBestListingsCollection({
    slug,
    limit,
  }: OpenseaQueryModel["ListingsBestCollectionParams"]) {
    return await listingsEndpoint.getBestListingsCollection({
      slug: slug,
      includePrivateListings: false,
      limit: limit || 20,
    });
  }
}

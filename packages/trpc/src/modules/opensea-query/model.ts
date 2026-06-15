export interface OpenseaQueryModel {
  NFTByAccountParams: {
    owner: string;
    collection: string;
  };
  NFTByOwnersParams: {
    owner: string;
    identifier: string;
    limit?: number;
  };
  NFTsByContractParams: {
    address: string;
    limit?: number;
  };
  ListingsBestCollectionParams: {
    slug: string;
    limit?: number;
  };
  NftMetadataParams: {
    contractAddress: string;
    tokenId: string;
    chain?: string;
  };
}

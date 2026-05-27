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
}

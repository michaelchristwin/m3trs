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
}

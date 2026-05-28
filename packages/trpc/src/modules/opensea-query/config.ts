import {
  Configuration,
  NFTEndpointsApi,
  ListingEndpointsApi,
} from "@m3trs/opensea-sdk";

const config = new Configuration({
  basePath: "https://api.opensea.io",
  headers: {
    "X-API-KEY": process.env.OPENSEA_API_KEY || "",
    Accept: "application/json",
  },
});

export const NFTEndpoint = new NFTEndpointsApi(config);
export const listingsEndpoint = new ListingEndpointsApi(config);

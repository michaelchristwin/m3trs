# NFTEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getNft**](NFTEndpointsApi.md#getnft) | **GET** /api/v2/chain/{chain}/contract/{address}/nfts/{identifier} | Get NFT |
| [**getNftAnalytics**](NFTEndpointsApi.md#getnftanalytics) | **GET** /api/v2/chain/{chain}/contract/{address}/nfts/{identifier}/analytics | Get NFT analytics |
| [**getNftMetadata**](NFTEndpointsApi.md#getnftmetadata) | **GET** /api/v2/metadata/{chain}/{contractAddress}/{tokenId} | Get NFT metadata |
| [**getNftOwners**](NFTEndpointsApi.md#getnftowners) | **GET** /api/v2/chain/{chain}/contract/{address}/nfts/{identifier}/owners | Get NFT owners |
| [**getNftsBatch**](NFTEndpointsApi.md#getnftsbatch) | **POST** /api/v2/nfts/batch | Get NFTs by identifiers |
| [**getNftsByAccount**](NFTEndpointsApi.md#getnftsbyaccount) | **GET** /api/v2/chain/{chain}/account/{address}/nfts | Get NFTs by account |
| [**getNftsByCollection**](NFTEndpointsApi.md#getnftsbycollection) | **GET** /api/v2/collection/{slug}/nfts | Get NFTs by collection |
| [**getNftsByContract**](NFTEndpointsApi.md#getnftsbycontract) | **GET** /api/v2/chain/{chain}/contract/{address}/nfts | Get NFTs by contract |
| [**refreshNftMetadata**](NFTEndpointsApi.md#refreshnftmetadata) | **POST** /api/v2/chain/{chain}/contract/{address}/nfts/{identifier}/refresh | Refresh NFT metadata |
| [**transferAssets**](NFTEndpointsApi.md#transferassets) | **POST** /api/v2/assets/transfer | Transfer NFTs or tokens between wallets |
| [**validateNftMetadata**](NFTEndpointsApi.md#validatenftmetadata) | **POST** /api/v2/chain/{chain}/contract/{address}/nfts/{identifier}/validate-metadata | Validate NFT metadata |



## getNft

> NftResponse getNft(chain, address, identifier)

Get NFT

Get metadata, traits, ownership information, and rarity for a single NFT.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { GetNftRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | The blockchain on which to filter the results
    chain: ethereum,
    // string | The unique public blockchain identifier for the contract
    address: 0x8ba1f109551bD432803012645Hac136c94C19D6e,
    // string | The NFT token id
    identifier: 1,
  } satisfies GetNftRequest;

  try {
    const data = await api.getNft(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **chain** | `string` | The blockchain on which to filter the results | [Defaults to `undefined`] |
| **address** | `string` | The unique public blockchain identifier for the contract | [Defaults to `undefined`] |
| **identifier** | `string` | The NFT token id | [Defaults to `undefined`] |

### Return type

[**NftResponse**](NftResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNftAnalytics

> NftAnalyticsResponse getNftAnalytics(chain, address, identifier)

Get NFT analytics

Get analytics data for a specific NFT including sales history and floor price history.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { GetNftAnalyticsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | The blockchain on which to filter the results
    chain: ethereum,
    // string | The unique public blockchain identifier for the contract
    address: 0x8ba1f109551bD432803012645Hac136c94C19D6e,
    // string | The NFT token id
    identifier: 1,
  } satisfies GetNftAnalyticsRequest;

  try {
    const data = await api.getNftAnalytics(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **chain** | `string` | The blockchain on which to filter the results | [Defaults to `undefined`] |
| **address** | `string` | The unique public blockchain identifier for the contract | [Defaults to `undefined`] |
| **identifier** | `string` | The NFT token id | [Defaults to `undefined`] |

### Return type

[**NftAnalyticsResponse**](NftAnalyticsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | NFT analytics data |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNftMetadata

> AssetMetadataResponse getNftMetadata(chain, contractAddress, tokenId)

Get NFT metadata

Get detailed metadata for an NFT including name, description, image, traits, and external links.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { GetNftMetadataRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | The blockchain on which to filter the results
    chain: ethereum,
    // string | The unique public blockchain identifier for the contract
    contractAddress: 0x8ba1f109551bD432803012645Hac136c94C19D6e,
    // string | The NFT token id
    tokenId: 1,
  } satisfies GetNftMetadataRequest;

  try {
    const data = await api.getNftMetadata(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **chain** | `string` | The blockchain on which to filter the results | [Defaults to `undefined`] |
| **contractAddress** | `string` | The unique public blockchain identifier for the contract | [Defaults to `undefined`] |
| **tokenId** | `string` | The NFT token id | [Defaults to `undefined`] |

### Return type

[**AssetMetadataResponse**](AssetMetadataResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNftOwners

> OwnersPaginatedResponse getNftOwners(chain, address, identifier, limit, next)

Get NFT owners

Get a paginated list of owners for a specific NFT. Particularly useful for ERC-1155 tokens which can have multiple owners.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { GetNftOwnersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | The blockchain on which to filter the results
    chain: ethereum,
    // string | The unique public blockchain identifier for the contract
    address: 0x8ba1f109551bD432803012645Hac136c94C19D6e,
    // string | The NFT token id
    identifier: 1,
    // number | Number of results to return (default: 20, max: 100) (optional)
    limit: 20,
    // string | Pagination cursor for next page (optional)
    next: next_example,
  } satisfies GetNftOwnersRequest;

  try {
    const data = await api.getNftOwners(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **chain** | `string` | The blockchain on which to filter the results | [Defaults to `undefined`] |
| **address** | `string` | The unique public blockchain identifier for the contract | [Defaults to `undefined`] |
| **identifier** | `string` | The NFT token id | [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return (default: 20, max: 100) | [Optional] [Defaults to `20`] |
| **next** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |

### Return type

[**OwnersPaginatedResponse**](OwnersPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | NFT owners |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNftsBatch

> NftBatchResponse getNftsBatch(batchNftsRequest)

Get NFTs by identifiers

Retrieve multiple NFTs in a single request by providing a list of identifiers (chain, contract address, and token ID). Not-found NFTs are silently omitted from the response.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { GetNftsBatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // BatchNftsRequest
    batchNftsRequest: ...,
  } satisfies GetNftsBatchRequest;

  try {
    const data = await api.getNftsBatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **batchNftsRequest** | [BatchNftsRequest](BatchNftsRequest.md) |  | |

### Return type

[**NftBatchResponse**](NftBatchResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNftsByAccount

> NftListResponse getNftsByAccount(address, chain, collection, limit, nextValue)

Get NFTs by account

Get all NFTs owned by a specific account on a blockchain, with optional collection filtering.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { GetNftsByAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | Account address
    address: address_example,
    // string | Blockchain chain identifier
    chain: chain_example,
    // string (optional)
    collection: collection_example,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies GetNftsByAccountRequest;

  try {
    const data = await api.getNftsByAccount(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **address** | `string` | Account address | [Defaults to `undefined`] |
| **chain** | `string` | Blockchain chain identifier | [Defaults to `undefined`] |
| **collection** | `string` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**NftListResponse**](NftListResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNftsByCollection

> NftListResponse getNftsByCollection(slug, traits, limit, nextValue)

Get NFTs by collection

Get NFTs in a specific collection. Optionally filter by traits using the \&#39;traits\&#39; query parameter with a JSON array of trait filters. Multiple traits are AND-combined (items must match all specified traits). Example: ?traits&#x3D;[{\&quot;traitType\&quot;:\&quot;Background\&quot;,\&quot;value\&quot;:\&quot;Red\&quot;},{\&quot;traitType\&quot;:\&quot;Eyes\&quot;,\&quot;value\&quot;:\&quot;Blue\&quot;}]

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { GetNftsByCollectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | Collection slug
    slug: slug_example,
    // string | JSON array of trait filters. Each object has \'traitType\' and \'value\' fields. Multiple traits are AND-combined (items must match all). Example: [{\"traitType\":\"Background\",\"value\":\"Red\"}] (optional)
    traits: [{traitType=Background, value=Red}],
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies GetNftsByCollectionRequest;

  try {
    const data = await api.getNftsByCollection(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **slug** | `string` | Collection slug | [Defaults to `undefined`] |
| **traits** | `string` | JSON array of trait filters. Each object has \&#39;traitType\&#39; and \&#39;value\&#39; fields. Multiple traits are AND-combined (items must match all). Example: [{\&quot;traitType\&quot;:\&quot;Background\&quot;,\&quot;value\&quot;:\&quot;Red\&quot;}] | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**NftListResponse**](NftListResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getNftsByContract

> NftListResponse getNftsByContract(address, chain, limit, nextValue)

Get NFTs by contract

Get all NFTs for a specific contract address on a blockchain.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { GetNftsByContractRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | Contract address
    address: address_example,
    // string | Blockchain chain identifier
    chain: chain_example,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies GetNftsByContractRequest;

  try {
    const data = await api.getNftsByContract(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **address** | `string` | Contract address | [Defaults to `undefined`] |
| **chain** | `string` | Blockchain chain identifier | [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**NftListResponse**](NftListResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## refreshNftMetadata

> string refreshNftMetadata(address, chain, identifier, ignoreCachedItemUrls)

Refresh NFT metadata

Queue a metadata refresh for a specific NFT to update its information from the blockchain.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { RefreshNftMetadataRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | Contract address
    address: address_example,
    // string | Blockchain chain identifier
    chain: chain_example,
    // string | Token identifier
    identifier: identifier_example,
    // boolean (optional)
    ignoreCachedItemUrls: true,
  } satisfies RefreshNftMetadataRequest;

  try {
    const data = await api.refreshNftMetadata(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **address** | `string` | Contract address | [Defaults to `undefined`] |
| **chain** | `string` | Blockchain chain identifier | [Defaults to `undefined`] |
| **identifier** | `string` | Token identifier | [Defaults to `undefined`] |
| **ignoreCachedItemUrls** | `boolean` |  | [Optional] [Defaults to `undefined`] |

### Return type

**string**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## transferAssets

> TransferResponse transferAssets(transferRequest)

Transfer NFTs or tokens between wallets

Returns ordered blockchain actions to execute for transferring one or more NFTs or tokens from one wallet to another. Supports bulk transfers of multiple assets in a single request.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { TransferAssetsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // TransferRequest
    transferRequest: ...,
  } satisfies TransferAssetsRequest;

  try {
    const data = await api.transferAssets(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **transferRequest** | [TransferRequest](TransferRequest.md) |  | |

### Return type

[**TransferResponse**](TransferResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transfer actions retrieved successfully |  -  |
| **400** | The request is invalid. Possible reasons: empty assets array, invalid addresses, invalid chain, or cross-ecosystem transfer. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## validateNftMetadata

> ValidateMetadataResponse validateNftMetadata(chain, address, identifier, ignoreCachedItemUrls)

Validate NFT metadata

Fetch and validate NFT metadata directly from the blockchain without using cached data. Returns both original and processed (SeaDN) URLs to show how the metadata would be ingested. This endpoint does not persist any data.

### Example

```ts
import {
  Configuration,
  NFTEndpointsApi,
} from '';
import type { ValidateNftMetadataRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new NFTEndpointsApi(config);

  const body = {
    // string | The blockchain on which the NFT exists
    chain: ethereum,
    // string | The contract address
    address: 0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d,
    // string | The NFT token id
    identifier: 1,
    // boolean | Whether to bypass cached SeaDN URLs (optional)
    ignoreCachedItemUrls: true,
  } satisfies ValidateNftMetadataRequest;

  try {
    const data = await api.validateNftMetadata(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **chain** | `string` | The blockchain on which the NFT exists | [Defaults to `undefined`] |
| **address** | `string` | The contract address | [Defaults to `undefined`] |
| **identifier** | `string` | The NFT token id | [Defaults to `undefined`] |
| **ignoreCachedItemUrls** | `boolean` | Whether to bypass cached SeaDN URLs | [Optional] [Defaults to `undefined`] |

### Return type

[**ValidateMetadataResponse**](ValidateMetadataResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


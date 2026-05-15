# ListingEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createListingActions**](ListingEndpointsApi.md#createlistingactionsoperation) | **POST** /api/v2/listings/actions | Get listing creation actions |
| [**generateCrossChainListingFulfillmentData**](ListingEndpointsApi.md#generatecrosschainlistingfulfillmentdata) | **POST** /api/v2/listings/cross_chain_fulfillment_data | Fulfill a listing using a different token |
| [**generateListingFulfillmentDataV2**](ListingEndpointsApi.md#generatelistingfulfillmentdatav2) | **POST** /api/v2/listings/fulfillment_data | Fulfill a listing |
| [**getBestListingNft**](ListingEndpointsApi.md#getbestlistingnft) | **GET** /api/v2/listings/collection/{slug}/nfts/{identifier}/best | Get best listing by NFT |
| [**getBestListingsCollection**](ListingEndpointsApi.md#getbestlistingscollection) | **GET** /api/v2/listings/collection/{slug}/best | Get best listings by collection |
| [**listListingsCollectionAll**](ListingEndpointsApi.md#listlistingscollectionall) | **GET** /api/v2/listings/collection/{slug}/all | Get all listings by collection |
| [**postListing**](ListingEndpointsApi.md#postlisting) | **POST** /api/v2/orders/{chain}/{protocol}/listings | Create a listing |
| [**sweepCollection**](ListingEndpointsApi.md#sweepcollectionoperation) | **POST** /api/v2/listings/sweep | Sweep buy items from a collection |



## createListingActions

> CreateListingActionsResponse createListingActions(createListingActionsRequest)

Get listing creation actions

Returns the blockchain actions (approvals + Seaport order signing payload) needed to list one or more NFTs. This eliminates the need to construct Seaport orders manually.

### Example

```ts
import {
  Configuration,
  ListingEndpointsApi,
} from '';
import type { CreateListingActionsOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ListingEndpointsApi(config);

  const body = {
    // CreateListingActionsRequest
    createListingActionsRequest: ...,
  } satisfies CreateListingActionsOperationRequest;

  try {
    const data = await api.createListingActions(body);
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
| **createListingActionsRequest** | [CreateListingActionsRequest](CreateListingActionsRequest.md) |  | |

### Return type

[**CreateListingActionsResponse**](CreateListingActionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Listing creation actions retrieved successfully |  -  |
| **400** | The request is invalid. Possible reasons: items on different chains, invalid addresses, items not found, invalid currency, or prices/quantities not positive. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateCrossChainListingFulfillmentData

> CrossChainFulfillmentResponse generateCrossChainListingFulfillmentData(crossChainFulfillmentRequest)

Fulfill a listing using a different token

Get fulfillment data to buy one or more listings using a token on a different chain or a different token on the same chain. Supports cross-chain purchases and same-chain token swaps via the Relay protocol. Returns an ordered list of transactions to execute.

### Example

```ts
import {
  Configuration,
  ListingEndpointsApi,
} from '';
import type { GenerateCrossChainListingFulfillmentDataRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ListingEndpointsApi(config);

  const body = {
    // CrossChainFulfillmentRequest
    crossChainFulfillmentRequest: ...,
  } satisfies GenerateCrossChainListingFulfillmentDataRequest;

  try {
    const data = await api.generateCrossChainListingFulfillmentData(body);
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
| **crossChainFulfillmentRequest** | [CrossChainFulfillmentRequest](CrossChainFulfillmentRequest.md) |  | |

### Return type

[**CrossChainFulfillmentResponse**](CrossChainFulfillmentResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cross-chain fulfillment data retrieved successfully |  -  |
| **400** | The request is invalid. Possible reasons: listing not found, listing not valid, listing is not a listing order, or no fulfillment actions could be generated. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateListingFulfillmentDataV2

> FulfillListingResponse generateListingFulfillmentDataV2(fullfillListingRequest)

Fulfill a listing

Retrieve all the information, including signatures, needed to fulfill a listing directly onchain.

### Example

```ts
import {
  Configuration,
  ListingEndpointsApi,
} from '';
import type { GenerateListingFulfillmentDataV2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ListingEndpointsApi(config);

  const body = {
    // FullfillListingRequest
    fullfillListingRequest: ...,
  } satisfies GenerateListingFulfillmentDataV2Request;

  try {
    const data = await api.generateListingFulfillmentDataV2(body);
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
| **fullfillListingRequest** | [FullfillListingRequest](FullfillListingRequest.md) |  | |

### Return type

[**FulfillListingResponse**](FulfillListingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Listing fulfillment data retrieved successfully |  -  |
| **400** | The request is invalid The order_hash does not exist The chain is not an EVM Chain The protocol_address is not a supported Seaport contract For other error reasons, see the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBestListingNft

> Listing getBestListingNft(slug, identifier, includePrivateListings)

Get best listing by NFT

Get the best listing for an NFT.

### Example

```ts
import {
  Configuration,
  ListingEndpointsApi,
} from '';
import type { GetBestListingNftRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ListingEndpointsApi(config);

  const body = {
    // string | Unique string to identify a collection on OpenSea
    slug: slug_example,
    // string | NFT token id
    identifier: identifier_example,
    // boolean | Whether to include private listings; defaults to false (optional)
    includePrivateListings: true,
  } satisfies GetBestListingNftRequest;

  try {
    const data = await api.getBestListingNft(body);
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
| **slug** | `string` | Unique string to identify a collection on OpenSea | [Defaults to `undefined`] |
| **identifier** | `string` | NFT token id | [Defaults to `undefined`] |
| **includePrivateListings** | `boolean` | Whether to include private listings; defaults to false | [Optional] [Defaults to `undefined`] |

### Return type

[**Listing**](Listing.md)

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


## getBestListingsCollection

> ListingsResponse getBestListingsCollection(slug, includePrivateListings, traits, limit, nextValue)

Get best listings by collection

Get the best listings for a collection sorted by price ascending. Optionally filter by item traits using the \&#39;traits\&#39; query parameter with a JSON array of trait filters. Multiple traits are AND-combined (items must match all). Note: results are not deduplicated by token ID — if a token has multiple listings, each listing is returned individually. Filter client-side if you need unique tokens. Example: ?traits&#x3D;[{\&quot;traitType\&quot;:\&quot;Background\&quot;,\&quot;value\&quot;:\&quot;Red\&quot;}]

### Example

```ts
import {
  Configuration,
  ListingEndpointsApi,
} from '';
import type { GetBestListingsCollectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ListingEndpointsApi(config);

  const body = {
    // string | Unique string to identify a collection on OpenSea
    slug: slug_example,
    // boolean | Whether to include private listings; defaults to false (optional)
    includePrivateListings: true,
    // string | JSON array of trait filters to narrow listings by item traits. Each object has \'traitType\' and \'value\' fields. Multiple traits are AND-combined (items must match all). Example: [{\"traitType\":\"Background\",\"value\":\"Red\"}] (optional)
    traits: [{"traitType":"Background","value":"Red"}],
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies GetBestListingsCollectionRequest;

  try {
    const data = await api.getBestListingsCollection(body);
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
| **slug** | `string` | Unique string to identify a collection on OpenSea | [Defaults to `undefined`] |
| **includePrivateListings** | `boolean` | Whether to include private listings; defaults to false | [Optional] [Defaults to `undefined`] |
| **traits** | `string` | JSON array of trait filters to narrow listings by item traits. Each object has \&#39;traitType\&#39; and \&#39;value\&#39; fields. Multiple traits are AND-combined (items must match all). Example: [{\&quot;traitType\&quot;:\&quot;Background\&quot;,\&quot;value\&quot;:\&quot;Red\&quot;}] | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListingsResponse**](ListingsResponse.md)

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


## listListingsCollectionAll

> ListingsResponse listListingsCollectionAll(slug, includePrivateListings, maker, limit, nextValue)

Get all listings by collection

Get all listings for a collection.

### Example

```ts
import {
  Configuration,
  ListingEndpointsApi,
} from '';
import type { ListListingsCollectionAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ListingEndpointsApi(config);

  const body = {
    // string | Unique string to identify a collection on OpenSea
    slug: slug_example,
    // boolean | Whether to include private listings; defaults to false (optional)
    includePrivateListings: true,
    // string | Filter by the wallet address of the order maker (optional)
    maker: maker_example,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies ListListingsCollectionAllRequest;

  try {
    const data = await api.listListingsCollectionAll(body);
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
| **slug** | `string` | Unique string to identify a collection on OpenSea | [Defaults to `undefined`] |
| **includePrivateListings** | `boolean` | Whether to include private listings; defaults to false | [Optional] [Defaults to `undefined`] |
| **maker** | `string` | Filter by the wallet address of the order maker | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ListingsResponse**](ListingsResponse.md)

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


## postListing

> Listing postListing(chain, protocol, seaportRequest)

Create a listing

List a single NFT (ERC721 or ERC1155) for sale on the OpenSea marketplace.

### Example

```ts
import {
  Configuration,
  ListingEndpointsApi,
} from '';
import type { PostListingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ListingEndpointsApi(config);

  const body = {
    // string
    chain: chain_example,
    // string
    protocol: protocol_example,
    // SeaportRequest
    seaportRequest: ...,
  } satisfies PostListingRequest;

  try {
    const data = await api.postListing(body);
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
| **chain** | `string` |  | [Defaults to `undefined`] |
| **protocol** | `string` |  | [Defaults to `undefined`] |
| **seaportRequest** | [SeaportRequest](SeaportRequest.md) |  | |

### Return type

[**Listing**](Listing.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Listing created successfully |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## sweepCollection

> SweepCollectionResponse sweepCollection(sweepCollectionRequest)

Sweep buy items from a collection

Buy up to N items from a collection using any payment token, including cross-chain. If a requested item becomes unavailable, the system can automatically substitute it with the next cheapest listing from the same collection (enabled by default). Returns an ordered list of transactions to execute.

### Example

```ts
import {
  Configuration,
  ListingEndpointsApi,
} from '';
import type { SweepCollectionOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ListingEndpointsApi(config);

  const body = {
    // SweepCollectionRequest
    sweepCollectionRequest: ...,
  } satisfies SweepCollectionOperationRequest;

  try {
    const data = await api.sweepCollection(body);
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
| **sweepCollectionRequest** | [SweepCollectionRequest](SweepCollectionRequest.md) |  | |

### Return type

[**SweepCollectionResponse**](SweepCollectionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Sweep fulfillment data retrieved successfully |  -  |
| **400** | The request is invalid. Possible reasons: collection not found, invalid chain, max_items exceeds limit, or no listings available. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


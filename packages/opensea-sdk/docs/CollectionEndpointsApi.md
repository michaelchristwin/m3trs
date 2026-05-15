# CollectionEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCollection**](CollectionEndpointsApi.md#getcollection) | **GET** /api/v2/collections/{slug} | Get a single collection |
| [**getCollectionFloorPrices**](CollectionEndpointsApi.md#getcollectionfloorprices) | **GET** /api/v2/collections/{slug}/floor_prices | Get collection floor price history |
| [**getCollectionHolders**](CollectionEndpointsApi.md#getcollectionholders) | **GET** /api/v2/collections/{slug}/holders | Get collection holders |
| [**getCollectionOfferAggregates**](CollectionEndpointsApi.md#getcollectionofferaggregates) | **GET** /api/v2/collections/{slug}/offer_aggregates | Get collection offer aggregates |
| [**getCollectionStats**](CollectionEndpointsApi.md#getcollectionstats) | **GET** /api/v2/collections/{slug}/stats | Get collection stats |
| [**getCollectionTraits**](CollectionEndpointsApi.md#getcollectiontraits) | **GET** /api/v2/traits/{slug} | Get collection traits |
| [**getCollectionsBatch**](CollectionEndpointsApi.md#getcollectionsbatch) | **POST** /api/v2/collections/batch | Get collections by slugs |
| [**getNftCollection**](CollectionEndpointsApi.md#getnftcollection) | **GET** /api/v2/chain/{chain}/contract/{address}/nfts/{identifier}/collection | Get collection by NFT |
| [**getTopCollections**](CollectionEndpointsApi.md#gettopcollections) | **GET** /api/v2/collections/top | Get top collections |
| [**getTrendingCollections**](CollectionEndpointsApi.md#gettrendingcollections) | **GET** /api/v2/collections/trending | Get trending collections |
| [**listCollections**](CollectionEndpointsApi.md#listcollections) | **GET** /api/v2/collections | Get multiple collections |



## getCollection

> CollectionDetailedResponse getCollection(slug)

Get a single collection

Get a single collection including details such as fees, traits, and links.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetCollectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | Unique identifier for the specific collection
    slug: doodles-official,
  } satisfies GetCollectionRequest;

  try {
    const data = await api.getCollection(body);
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
| **slug** | `string` | Unique identifier for the specific collection | [Defaults to `undefined`] |

### Return type

[**CollectionDetailedResponse**](CollectionDetailedResponse.md)

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


## getCollectionFloorPrices

> FloorPriceHistoryResponse getCollectionFloorPrices(slug, timeframe, resolution)

Get collection floor price history

Get time-series floor price data for a collection.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetCollectionFloorPricesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | Collection slug
    slug: boredapeyachtclub,
    // string | Time window for floor price history. Options: one_minute, five_minutes, fifteen_minutes, one_hour, one_day, seven_days, thirty_days, one_year, all_time (optional)
    timeframe: one_day,
    // number | Number of data points to return (optional)
    resolution: 56,
  } satisfies GetCollectionFloorPricesRequest;

  try {
    const data = await api.getCollectionFloorPrices(body);
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
| **timeframe** | `string` | Time window for floor price history. Options: one_minute, five_minutes, fifteen_minutes, one_hour, one_day, seven_days, thirty_days, one_year, all_time | [Optional] [Defaults to `&#39;one_day&#39;`] |
| **resolution** | `number` | Number of data points to return | [Optional] [Defaults to `undefined`] |

### Return type

[**FloorPriceHistoryResponse**](FloorPriceHistoryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Floor price history |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollectionHolders

> CollectionHoldersPaginatedResponse getCollectionHolders(slug, limit, cursor, sortDirection, ownedBy)

Get collection holders

Get a paginated list of holders for a collection.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetCollectionHoldersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | Collection slug
    slug: boredapeyachtclub,
    // number | Number of results to return (default: 20, max: 100) (optional)
    limit: 20,
    // string | Pagination cursor for next page (optional)
    cursor: cursor_example,
    // string | Sort direction (asc or desc) (optional)
    sortDirection: desc,
    // string | Filter by owner address (optional)
    ownedBy: ownedBy_example,
  } satisfies GetCollectionHoldersRequest;

  try {
    const data = await api.getCollectionHolders(body);
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
| **limit** | `number` | Number of results to return (default: 20, max: 100) | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |
| **sortDirection** | `string` | Sort direction (asc or desc) | [Optional] [Defaults to `&#39;desc&#39;`] |
| **ownedBy** | `string` | Filter by owner address | [Optional] [Defaults to `undefined`] |

### Return type

[**CollectionHoldersPaginatedResponse**](CollectionHoldersPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection holders |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollectionOfferAggregates

> CollectionOfferAggregatesPaginatedResponse getCollectionOfferAggregates(slug, limit, cursor, sortDirection)

Get collection offer aggregates

Get aggregated offer buckets grouped by price level for a collection.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetCollectionOfferAggregatesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | Collection slug
    slug: boredapeyachtclub,
    // number | Number of results to return (default: 20, max: 100) (optional)
    limit: 20,
    // string | Pagination cursor for next page (optional)
    cursor: cursor_example,
    // string | Sort direction (asc or desc) (optional)
    sortDirection: desc,
  } satisfies GetCollectionOfferAggregatesRequest;

  try {
    const data = await api.getCollectionOfferAggregates(body);
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
| **limit** | `number` | Number of results to return (default: 20, max: 100) | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |
| **sortDirection** | `string` | Sort direction (asc or desc) | [Optional] [Defaults to `&#39;desc&#39;`] |

### Return type

[**CollectionOfferAggregatesPaginatedResponse**](CollectionOfferAggregatesPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection offer aggregates |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollectionStats

> CollectionStatsResponse getCollectionStats(slug)

Get collection stats

Get comprehensive statistics for a collection including volume, floor price, and trading metrics.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetCollectionStatsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | Unique identifier for the specific collection
    slug: doodles-official,
  } satisfies GetCollectionStatsRequest;

  try {
    const data = await api.getCollectionStats(body);
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
| **slug** | `string` | Unique identifier for the specific collection | [Defaults to `undefined`] |

### Return type

[**CollectionStatsResponse**](CollectionStatsResponse.md)

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


## getCollectionTraits

> getCollectionTraits(slug)

Get collection traits

Get all available traits for a collection with their value counts and data types.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetCollectionTraitsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | Unique identifier for the specific collection
    slug: doodles-official,
  } satisfies GetCollectionTraitsRequest;

  try {
    const data = await api.getCollectionTraits(body);
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
| **slug** | `string` | Unique identifier for the specific collection | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection traits with categories and counts |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCollectionsBatch

> CollectionBatchResponse getCollectionsBatch(batchCollectionsRequest)

Get collections by slugs

Retrieve multiple collections in a single request by providing a list of slugs. Results are returned in the same order as the input slugs. Not-found collections are silently omitted.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetCollectionsBatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // BatchCollectionsRequest
    batchCollectionsRequest: ...,
  } satisfies GetCollectionsBatchRequest;

  try {
    const data = await api.getCollectionsBatch(body);
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
| **batchCollectionsRequest** | [BatchCollectionsRequest](BatchCollectionsRequest.md) |  | |

### Return type

[**CollectionBatchResponse**](CollectionBatchResponse.md)

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


## getNftCollection

> CollectionDetailedResponse getNftCollection(chain, address, identifier)

Get collection by NFT

Get the collection that an NFT belongs to. This is useful for multi-contract collections like Art Blocks where the item ID disambiguates which collection the NFT belongs to.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetNftCollectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | The blockchain on which to filter the results
    chain: ethereum,
    // string | The unique public blockchain identifier for the contract
    address: 0x8ba1f109551bD432803012645Hac136c94C19D6e,
    // string | The NFT token id
    identifier: 1,
  } satisfies GetNftCollectionRequest;

  try {
    const data = await api.getNftCollection(body);
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

[**CollectionDetailedResponse**](CollectionDetailedResponse.md)

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


## getTopCollections

> CollectionPaginatedResponse getTopCollections(sortBy, chains, category, limit, cursor)

Get top collections

Get top NFT collections ranked by various stats (sorted descending). Unlike /trending, results are not filtered by verification status; spam-tagged collections are excluded via trust-safety enforcement states. Available sort options: one_day_volume, seven_days_volume, thirty_days_volume, floor_price, one_day_sales, seven_days_sales, thirty_days_sales, total_volume, total_sales.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetTopCollectionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | The stat to sort collections by (always sorted descending). Options: one_day_volume, seven_days_volume, thirty_days_volume, floor_price, one_day_sales, seven_days_sales, thirty_days_sales, total_volume, total_sales (optional)
    sortBy: one_day_volume,
    // Array<ChainIdentifier> | Blockchain(s) to filter by. Comma-separated list of chain identifiers. Unsupported chains are silently ignored; a 400 is returned only if all specified chains are unsupported. (optional)
    chains: ethereum,base,
    // string | Category to filter by (e.g. art, gaming, memberships, music, pfps, photography, domain-names, virtual-worlds, sports-collectibles, physical-collectibles). (optional)
    category: pfps,
    // number | Maximum number of collections to return (1-100). (optional)
    limit: 50,
    // string | Cursor for pagination (optional)
    cursor: cursor_example,
  } satisfies GetTopCollectionsRequest;

  try {
    const data = await api.getTopCollections(body);
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
| **sortBy** | `string` | The stat to sort collections by (always sorted descending). Options: one_day_volume, seven_days_volume, thirty_days_volume, floor_price, one_day_sales, seven_days_sales, thirty_days_sales, total_volume, total_sales | [Optional] [Defaults to `&#39;one_day_volume&#39;`] |
| **chains** | `Array<ChainIdentifier>` | Blockchain(s) to filter by. Comma-separated list of chain identifiers. Unsupported chains are silently ignored; a 400 is returned only if all specified chains are unsupported. | [Optional] |
| **category** | `string` | Category to filter by (e.g. art, gaming, memberships, music, pfps, photography, domain-names, virtual-worlds, sports-collectibles, physical-collectibles). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of collections to return (1-100). | [Optional] [Defaults to `50`] |
| **cursor** | `string` | Cursor for pagination | [Optional] [Defaults to `undefined`] |

### Return type

[**CollectionPaginatedResponse**](CollectionPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Top collections list |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTrendingCollections

> CollectionPaginatedResponse getTrendingCollections(timeframe, chains, category, limit, cursor)

Get trending collections

Get a list of trending NFT collections sorted by sales activity over a specified timeframe. Trending is determined by sales volume and activity metrics. Available timeframes range from 1 minute to all time. For the one_day timeframe without a chain filter, collections are sorted by a composite trending score; all other timeframes sort by raw sales count. Results are filtered to verified, non-spam, non-NSFW collections with minimum volume thresholds.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { GetTrendingCollectionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // string | Time window for trending calculation. Options: one_minute, five_minutes, fifteen_minutes, one_hour, one_day, seven_days, thirty_days, one_year, all_time. (optional)
    timeframe: one_day,
    // Array<ChainIdentifier> | Blockchain(s) to filter by. Comma-separated list of chain identifiers. Unsupported chains are silently ignored; a 400 is returned only if all specified chains are unsupported. (optional)
    chains: ethereum,base,
    // string | Category to filter by (e.g. art, gaming, memberships, music, pfps, photography, domain-names, virtual-worlds, sports-collectibles, physical-collectibles). (optional)
    category: pfps,
    // number | Maximum number of collections to return (1-100). (optional)
    limit: 20,
    // string | Cursor for pagination. Use the \'next\' value from a previous response. (optional)
    cursor: cursor_example,
  } satisfies GetTrendingCollectionsRequest;

  try {
    const data = await api.getTrendingCollections(body);
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
| **timeframe** | `string` | Time window for trending calculation. Options: one_minute, five_minutes, fifteen_minutes, one_hour, one_day, seven_days, thirty_days, one_year, all_time. | [Optional] [Defaults to `&#39;one_day&#39;`] |
| **chains** | `Array<ChainIdentifier>` | Blockchain(s) to filter by. Comma-separated list of chain identifiers. Unsupported chains are silently ignored; a 400 is returned only if all specified chains are unsupported. | [Optional] |
| **category** | `string` | Category to filter by (e.g. art, gaming, memberships, music, pfps, photography, domain-names, virtual-worlds, sports-collectibles, physical-collectibles). | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of collections to return (1-100). | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Cursor for pagination. Use the \&#39;next\&#39; value from a previous response. | [Optional] [Defaults to `undefined`] |

### Return type

[**CollectionPaginatedResponse**](CollectionPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trending collections |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listCollections

> CollectionPaginatedResponse listCollections(limit, nextValue, chain, creatorUsername, includeHidden, orderBy)

Get multiple collections

Get a list of collections with filters and sorting options.

### Example

```ts
import {
  Configuration,
  CollectionEndpointsApi,
} from '';
import type { ListCollectionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionEndpointsApi(config);

  const body = {
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
    // string | Blockchain to filter by (optional)
    chain: chain_example,
    // string | Username of collection creator to filter by (optional)
    creatorUsername: creatorUsername_example,
    // boolean | Include hidden collections in results (optional)
    includeHidden: true,
    // string | Field to order results by (optional)
    orderBy: created_date,
  } satisfies ListCollectionsRequest;

  try {
    const data = await api.listCollections(body);
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
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |
| **chain** | `string` | Blockchain to filter by | [Optional] [Defaults to `undefined`] |
| **creatorUsername** | `string` | Username of collection creator to filter by | [Optional] [Defaults to `undefined`] |
| **includeHidden** | `boolean` | Include hidden collections in results | [Optional] [Defaults to `undefined`] |
| **orderBy** | `string` | Field to order results by | [Optional] [Defaults to `undefined`] |

### Return type

[**CollectionPaginatedResponse**](CollectionPaginatedResponse.md)

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


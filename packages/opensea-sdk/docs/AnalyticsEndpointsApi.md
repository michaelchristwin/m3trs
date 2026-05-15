# AnalyticsEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCollectionStats**](AnalyticsEndpointsApi.md#getcollectionstats) | **GET** /api/v2/collections/{slug}/stats | Get collection stats |
| [**listEvents**](AnalyticsEndpointsApi.md#listevents) | **GET** /api/v2/events | Get events |
| [**listEventsByAccount**](AnalyticsEndpointsApi.md#listeventsbyaccount) | **GET** /api/v2/events/accounts/{address} | Get events (by account) |
| [**listEventsByCollection**](AnalyticsEndpointsApi.md#listeventsbycollection) | **GET** /api/v2/events/collection/{slug} | Get events (by collection) |
| [**listEventsByNft**](AnalyticsEndpointsApi.md#listeventsbynft) | **GET** /api/v2/events/chain/{chain}/contract/{address}/nfts/{identifier} | Get events (by NFT) |



## getCollectionStats

> CollectionStatsResponse getCollectionStats(slug)

Get collection stats

Get comprehensive statistics for a collection including volume, floor price, and trading metrics.

### Example

```ts
import {
  Configuration,
  AnalyticsEndpointsApi,
} from '';
import type { GetCollectionStatsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AnalyticsEndpointsApi(config);

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


## listEvents

> AssetEventsResponse listEvents(after, before, eventType, limit, nextValue)

Get events

Get a list of events, with optional filtering by event type and time range.

### Example

```ts
import {
  Configuration,
  AnalyticsEndpointsApi,
} from '';
import type { ListEventsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AnalyticsEndpointsApi(config);

  const body = {
    // number | Only show events after this timestamp (Unix timestamp in seconds) (optional)
    after: 789,
    // number | Only show events before this timestamp (Unix timestamp in seconds) (optional)
    before: 789,
    // Array<'sale' | 'transfer' | 'mint' | 'listing' | 'offer' | 'trait_offer' | 'collection_offer'> | Filter by event types. To get order invalidation and revalidation events, please use the Stream API. The order status can also be checked on the Get Order endpoint. (optional)
    eventType: ...,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies ListEventsRequest;

  try {
    const data = await api.listEvents(body);
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
| **after** | `number` | Only show events after this timestamp (Unix timestamp in seconds) | [Optional] [Defaults to `undefined`] |
| **before** | `number` | Only show events before this timestamp (Unix timestamp in seconds) | [Optional] [Defaults to `undefined`] |
| **eventType** | `sale`, `transfer`, `mint`, `listing`, `offer`, `trait_offer`, `collection_offer` | Filter by event types. To get order invalidation and revalidation events, please use the Stream API. The order status can also be checked on the Get Order endpoint. | [Optional] [Enum: sale, transfer, mint, listing, offer, trait_offer, collection_offer] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AssetEventsResponse**](AssetEventsResponse.md)

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


## listEventsByAccount

> AssetEventsResponse listEventsByAccount(address, after, before, eventType, chain, limit, nextValue)

Get events (by account)

Get a list of events for an account.

### Example

```ts
import {
  Configuration,
  AnalyticsEndpointsApi,
} from '';
import type { ListEventsByAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AnalyticsEndpointsApi(config);

  const body = {
    // string | The blockchain address of the account
    address: 0x8ba1f109551bD432803012645Hac136c94C19D6e,
    // number | Only show events after this timestamp (Unix timestamp in seconds) (optional)
    after: 789,
    // number | Only show events before this timestamp (Unix timestamp in seconds) (optional)
    before: 789,
    // Array<'sale' | 'transfer' | 'mint' | 'listing' | 'offer' | 'trait_offer' | 'collection_offer'> | Filter by event types. To get order invalidation and revalidation events, please use the Stream API. The order status can also be checked on the Get Order endpoint. (optional)
    eventType: ...,
    // string | Filter by blockchain (optional)
    chain: chain_example,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies ListEventsByAccountRequest;

  try {
    const data = await api.listEventsByAccount(body);
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
| **address** | `string` | The blockchain address of the account | [Defaults to `undefined`] |
| **after** | `number` | Only show events after this timestamp (Unix timestamp in seconds) | [Optional] [Defaults to `undefined`] |
| **before** | `number` | Only show events before this timestamp (Unix timestamp in seconds) | [Optional] [Defaults to `undefined`] |
| **eventType** | `sale`, `transfer`, `mint`, `listing`, `offer`, `trait_offer`, `collection_offer` | Filter by event types. To get order invalidation and revalidation events, please use the Stream API. The order status can also be checked on the Get Order endpoint. | [Optional] [Enum: sale, transfer, mint, listing, offer, trait_offer, collection_offer] |
| **chain** | `string` | Filter by blockchain | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AssetEventsResponse**](AssetEventsResponse.md)

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


## listEventsByCollection

> AssetEventsResponse listEventsByCollection(slug, after, before, eventType, traits, limit, nextValue)

Get events (by collection)

Get a list of events for a collection. Optionally filter by traits to only return events for items matching the specified trait criteria.

### Example

```ts
import {
  Configuration,
  AnalyticsEndpointsApi,
} from '';
import type { ListEventsByCollectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AnalyticsEndpointsApi(config);

  const body = {
    // string | Unique identifier for the collection
    slug: doodles-official,
    // number | Only show events after this timestamp (Unix timestamp in seconds) (optional)
    after: 789,
    // number | Only show events before this timestamp (Unix timestamp in seconds) (optional)
    before: 789,
    // Array<'sale' | 'transfer' | 'mint' | 'listing' | 'offer' | 'trait_offer' | 'collection_offer'> | Filter by event types. To get order invalidation and revalidation events, please use the Stream API. The order status can also be checked on the Get Order endpoint. (optional)
    eventType: ...,
    // string | JSON array of trait filters. Each object has \'traitType\' and \'value\' fields. Multiple traits are AND-combined (items must match all). Example: [{\"traitType\":\"Background\",\"value\":\"Red\"}] (optional)
    traits: [{"traitType":"Background","value":"Red"}],
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies ListEventsByCollectionRequest;

  try {
    const data = await api.listEventsByCollection(body);
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
| **slug** | `string` | Unique identifier for the collection | [Defaults to `undefined`] |
| **after** | `number` | Only show events after this timestamp (Unix timestamp in seconds) | [Optional] [Defaults to `undefined`] |
| **before** | `number` | Only show events before this timestamp (Unix timestamp in seconds) | [Optional] [Defaults to `undefined`] |
| **eventType** | `sale`, `transfer`, `mint`, `listing`, `offer`, `trait_offer`, `collection_offer` | Filter by event types. To get order invalidation and revalidation events, please use the Stream API. The order status can also be checked on the Get Order endpoint. | [Optional] [Enum: sale, transfer, mint, listing, offer, trait_offer, collection_offer] |
| **traits** | `string` | JSON array of trait filters. Each object has \&#39;traitType\&#39; and \&#39;value\&#39; fields. Multiple traits are AND-combined (items must match all). Example: [{\&quot;traitType\&quot;:\&quot;Background\&quot;,\&quot;value\&quot;:\&quot;Red\&quot;}] | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AssetEventsResponse**](AssetEventsResponse.md)

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


## listEventsByNft

> AssetEventsResponse listEventsByNft(chain, address, identifier, after, before, eventType, limit, nextValue)

Get events (by NFT)

Get a list of events for a specific NFT.

### Example

```ts
import {
  Configuration,
  AnalyticsEndpointsApi,
} from '';
import type { ListEventsByNftRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AnalyticsEndpointsApi(config);

  const body = {
    // string | The blockchain on which to filter the results
    chain: ethereum,
    // string | The unique public blockchain identifier for the contract
    address: 0x8ba1f109551bD432803012645Hac136c94C19D6e,
    // string | The NFT token id
    identifier: 1,
    // number | Only show events after this timestamp (Unix timestamp in seconds) (optional)
    after: 789,
    // number | Only show events before this timestamp (Unix timestamp in seconds) (optional)
    before: 789,
    // Array<'sale' | 'transfer' | 'mint' | 'listing' | 'offer' | 'trait_offer' | 'collection_offer'> | Filter by event types. To get order invalidation and revalidation events, please use the Stream API. The order status can also be checked on the Get Order endpoint. (optional)
    eventType: ...,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies ListEventsByNftRequest;

  try {
    const data = await api.listEventsByNft(body);
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
| **after** | `number` | Only show events after this timestamp (Unix timestamp in seconds) | [Optional] [Defaults to `undefined`] |
| **before** | `number` | Only show events before this timestamp (Unix timestamp in seconds) | [Optional] [Defaults to `undefined`] |
| **eventType** | `sale`, `transfer`, `mint`, `listing`, `offer`, `trait_offer`, `collection_offer` | Filter by event types. To get order invalidation and revalidation events, please use the Stream API. The order status can also be checked on the Get Order endpoint. | [Optional] [Enum: sale, transfer, mint, listing, offer, trait_offer, collection_offer] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AssetEventsResponse**](AssetEventsResponse.md)

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


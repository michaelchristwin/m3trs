# AccountEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccount**](AccountEndpointsApi.md#getaccount) | **GET** /api/v2/accounts/{address_or_username} | Get an OpenSea account profile |
| [**getPortfolioHistory**](AccountEndpointsApi.md#getportfoliohistory) | **GET** /api/v2/account/{address}/portfolio/history | Get portfolio net worth history for an account |
| [**getPortfolioStats**](AccountEndpointsApi.md#getportfoliostats) | **GET** /api/v2/account/{address}/portfolio | Get portfolio stats for an account |
| [**getProfileCollections**](AccountEndpointsApi.md#getprofilecollections) | **GET** /api/v2/account/{address}/collections | Get collections owned by an account |
| [**getProfileFavorites**](AccountEndpointsApi.md#getprofilefavorites) | **GET** /api/v2/account/{address}/favorites | Get items favorited by an account |
| [**getProfileListings**](AccountEndpointsApi.md#getprofilelistings) | **GET** /api/v2/account/{address}/listings | Get active listings for an account |
| [**getProfileOffers**](AccountEndpointsApi.md#getprofileoffers) | **GET** /api/v2/account/{address}/offers | Get active offers made by an account |
| [**getProfileOffersReceived**](AccountEndpointsApi.md#getprofileoffersreceived) | **GET** /api/v2/account/{address}/offers_received | Get offers received by an account |
| [**resolveAccount**](AccountEndpointsApi.md#resolveaccount) | **GET** /api/v2/accounts/resolve/{identifier} | Resolve an account identifier |



## getAccount

> AccountResponse getAccount(addressOrUsername)

Get an OpenSea account profile

Get an OpenSea Account Profile including details such as bio, social media usernames, and profile image.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { GetAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | The blockchain address or username of the account to retrieve
    addressOrUsername: 0x8ba1f109551bD432803012645Hac136c94C19D6e,
  } satisfies GetAccountRequest;

  try {
    const data = await api.getAccount(body);
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
| **addressOrUsername** | `string` | The blockchain address or username of the account to retrieve | [Defaults to `undefined`] |

### Return type

[**AccountResponse**](AccountResponse.md)

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


## getPortfolioHistory

> PortfolioHistoryResponse getPortfolioHistory(address, timeframe)

Get portfolio net worth history for an account

Get net worth time series data for a wallet address over a given timeframe.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { GetPortfolioHistoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | The wallet address
    address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
    // 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | Timeframe for history: HOUR, DAY, WEEK, MONTH (optional)
    timeframe: timeframe_example,
  } satisfies GetPortfolioHistoryRequest;

  try {
    const data = await api.getPortfolioHistory(body);
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
| **address** | `string` | The wallet address | [Defaults to `undefined`] |
| **timeframe** | `HOUR`, `DAY`, `WEEK`, `MONTH` | Timeframe for history: HOUR, DAY, WEEK, MONTH | [Optional] [Defaults to `&#39;DAY&#39;`] [Enum: HOUR, DAY, WEEK, MONTH] |

### Return type

[**PortfolioHistoryResponse**](PortfolioHistoryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Portfolio history |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPortfolioStats

> PortfolioStatsResponse getPortfolioStats(address, timeframe)

Get portfolio stats for an account

Get portfolio analytics including total value, NFT/token breakdown, and P&amp;L for a wallet address over a given timeframe.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { GetPortfolioStatsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | The wallet address
    address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
    // 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | Timeframe for P&L calculation: HOUR, DAY, WEEK, MONTH (optional)
    timeframe: timeframe_example,
  } satisfies GetPortfolioStatsRequest;

  try {
    const data = await api.getPortfolioStats(body);
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
| **address** | `string` | The wallet address | [Defaults to `undefined`] |
| **timeframe** | `HOUR`, `DAY`, `WEEK`, `MONTH` | Timeframe for P&amp;L calculation: HOUR, DAY, WEEK, MONTH | [Optional] [Defaults to `&#39;DAY&#39;`] [Enum: HOUR, DAY, WEEK, MONTH] |

### Return type

[**PortfolioStatsResponse**](PortfolioStatsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Portfolio stats |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProfileCollections

> ProfileCollectionsResponse getProfileCollections(address, after, limit, chains)

Get collections owned by an account

Get a paginated list of collections owned by a wallet address, with ownership data.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { GetProfileCollectionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | The wallet address
    address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
    // string | Cursor for pagination (optional)
    after: after_example,
    // number | Number of results to return (optional)
    limit: 56,
    // Array<ChainIdentifier> | Filter by chains (optional)
    chains: ...,
  } satisfies GetProfileCollectionsRequest;

  try {
    const data = await api.getProfileCollections(body);
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
| **address** | `string` | The wallet address | [Defaults to `undefined`] |
| **after** | `string` | Cursor for pagination | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return | [Optional] [Defaults to `50`] |
| **chains** | `Array<ChainIdentifier>` | Filter by chains | [Optional] |

### Return type

[**ProfileCollectionsResponse**](ProfileCollectionsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collections owned by account |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProfileFavorites

> NftListResponse getProfileFavorites(address, after, limit, sortBy, sortDirection, chains)

Get items favorited by an account

Get a paginated list of items favorited by a wallet address.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { GetProfileFavoritesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | The wallet address
    address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
    // string | Cursor for pagination (optional)
    after: after_example,
    // number | Number of results to return (optional)
    limit: 56,
    // 'CREATED_DATE' | 'PRICE' | 'RARITY' | 'LISTING_CREATED_DATE' | 'LAST_SALE' | Sort by field (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction (optional)
    sortDirection: sortDirection_example,
    // Set<ChainIdentifier> | Filter by chains (optional)
    chains: ...,
  } satisfies GetProfileFavoritesRequest;

  try {
    const data = await api.getProfileFavorites(body);
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
| **address** | `string` | The wallet address | [Defaults to `undefined`] |
| **after** | `string` | Cursor for pagination | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return | [Optional] [Defaults to `50`] |
| **sortBy** | `CREATED_DATE`, `PRICE`, `RARITY`, `LISTING_CREATED_DATE`, `LAST_SALE` | Sort by field | [Optional] [Defaults to `&#39;CREATED_DATE&#39;`] [Enum: CREATED_DATE, PRICE, RARITY, LISTING_CREATED_DATE, LAST_SALE] |
| **sortDirection** | `asc`, `desc` | Sort direction | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **chains** | `Set<ChainIdentifier>` | Filter by chains | [Optional] |

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
| **200** | Favorited items |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProfileListings

> ListingsResponse getProfileListings(address, after, limit, collectionSlugs, chains, sortBy, sortDirection)

Get active listings for an account

Get a paginated list of active listings created by a wallet address.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { GetProfileListingsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | The wallet address
    address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
    // string | Cursor for pagination (optional)
    after: after_example,
    // number | Number of results to return (optional)
    limit: 56,
    // Array<string> | Filter by collection slugs (optional)
    collectionSlugs: ...,
    // Array<ChainIdentifier> | Filter by chains (optional)
    chains: ...,
    // 'START_TIME' | 'END_TIME' | Sort by field (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction (optional)
    sortDirection: sortDirection_example,
  } satisfies GetProfileListingsRequest;

  try {
    const data = await api.getProfileListings(body);
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
| **address** | `string` | The wallet address | [Defaults to `undefined`] |
| **after** | `string` | Cursor for pagination | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return | [Optional] [Defaults to `50`] |
| **collectionSlugs** | `Array<string>` | Filter by collection slugs | [Optional] |
| **chains** | `Array<ChainIdentifier>` | Filter by chains | [Optional] |
| **sortBy** | `START_TIME`, `END_TIME` | Sort by field | [Optional] [Defaults to `&#39;START_TIME&#39;`] [Enum: START_TIME, END_TIME] |
| **sortDirection** | `asc`, `desc` | Sort direction | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

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
| **200** | Active listings for account |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProfileOffers

> OffersResponse getProfileOffers(address, after, limit, collectionSlugs, chains, sortBy, sortDirection)

Get active offers made by an account

Get a paginated list of active offers made by a wallet address.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { GetProfileOffersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | The wallet address
    address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
    // string | Cursor for pagination (optional)
    after: after_example,
    // number | Number of results to return (optional)
    limit: 56,
    // Array<string> | Filter by collection slugs (optional)
    collectionSlugs: ...,
    // Array<ChainIdentifier> | Filter by chains (optional)
    chains: ...,
    // 'START_TIME' | 'END_TIME' | Sort by field (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction (optional)
    sortDirection: sortDirection_example,
  } satisfies GetProfileOffersRequest;

  try {
    const data = await api.getProfileOffers(body);
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
| **address** | `string` | The wallet address | [Defaults to `undefined`] |
| **after** | `string` | Cursor for pagination | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return | [Optional] [Defaults to `50`] |
| **collectionSlugs** | `Array<string>` | Filter by collection slugs | [Optional] |
| **chains** | `Array<ChainIdentifier>` | Filter by chains | [Optional] |
| **sortBy** | `START_TIME`, `END_TIME` | Sort by field | [Optional] [Defaults to `&#39;START_TIME&#39;`] [Enum: START_TIME, END_TIME] |
| **sortDirection** | `asc`, `desc` | Sort direction | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

### Return type

[**OffersResponse**](OffersResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active offers for account |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProfileOffersReceived

> OffersResponse getProfileOffersReceived(address, after, limit, collectionSlugs, chains, sortBy, sortDirection)

Get offers received by an account

Get a paginated list of offers received on items owned by a wallet address.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { GetProfileOffersReceivedRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | The wallet address
    address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
    // string | Cursor for pagination (optional)
    after: after_example,
    // number | Number of results to return (optional)
    limit: 56,
    // Array<string> | Filter by collection slugs (optional)
    collectionSlugs: ...,
    // Array<ChainIdentifier> | Filter by chains (optional)
    chains: ...,
    // 'START_TIME' | 'TOP_ASSET_OFFER' | Sort by field (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort direction (optional)
    sortDirection: sortDirection_example,
  } satisfies GetProfileOffersReceivedRequest;

  try {
    const data = await api.getProfileOffersReceived(body);
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
| **address** | `string` | The wallet address | [Defaults to `undefined`] |
| **after** | `string` | Cursor for pagination | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return | [Optional] [Defaults to `50`] |
| **collectionSlugs** | `Array<string>` | Filter by collection slugs | [Optional] |
| **chains** | `Array<ChainIdentifier>` | Filter by chains | [Optional] |
| **sortBy** | `START_TIME`, `TOP_ASSET_OFFER` | Sort by field | [Optional] [Defaults to `&#39;START_TIME&#39;`] [Enum: START_TIME, TOP_ASSET_OFFER] |
| **sortDirection** | `asc`, `desc` | Sort direction | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |

### Return type

[**OffersResponse**](OffersResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Offers received for account |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resolveAccount

> AccountResolveResponse resolveAccount(identifier)

Resolve an account identifier

Resolve an ENS name (e.g. vitalik.eth), OpenSea username, or wallet address to canonical account info including address, username, and ENS name. The ENS path performs both forward resolution (name → address) and reverse lookup (address → canonical primary name). The address and ENS paths perform enrichment calls (username + ENS reverse lookup) in parallel. The username path only needs an ENS reverse lookup after the initial resolution and runs it sequentially. The ENS and username paths require an extra initial call and may be slower than the address path on cache misses.

### Example

```ts
import {
  Configuration,
  AccountEndpointsApi,
} from '';
import type { ResolveAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AccountEndpointsApi(config);

  const body = {
    // string | An ENS name (e.g. vitalik.eth), OpenSea username, or wallet address to resolve
    identifier: vitalik.eth,
  } satisfies ResolveAccountRequest;

  try {
    const data = await api.resolveAccount(body);
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
| **identifier** | `string` | An ENS name (e.g. vitalik.eth), OpenSea username, or wallet address to resolve | [Defaults to `undefined`] |

### Return type

[**AccountResolveResponse**](AccountResolveResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Resolved account info |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


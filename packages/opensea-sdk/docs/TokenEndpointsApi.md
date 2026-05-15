# TokenEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getToken**](TokenEndpointsApi.md#gettoken) | **GET** /api/v2/chain/{chain}/token/{address} | Get token details |
| [**getTokenActivity**](TokenEndpointsApi.md#gettokenactivity) | **GET** /api/v2/chain/{chain}/token/{address}/activity | Get token swap activity |
| [**getTokenBalancesByAccount**](TokenEndpointsApi.md#gettokenbalancesbyaccount) | **GET** /api/v2/account/{address}/tokens | Get token balances by account |
| [**getTokenGroup**](TokenEndpointsApi.md#gettokengroup) | **GET** /api/v2/token-groups/{slug} | Get a token group by slug |
| [**getTokenGroups**](TokenEndpointsApi.md#gettokengroups) | **GET** /api/v2/token-groups | Get token groups |
| [**getTokenOhlcv**](TokenEndpointsApi.md#gettokenohlcv) | **GET** /api/v2/chain/{chain}/token/{address}/ohlcv | Get token OHLCV candles |
| [**getTokenPriceHistory**](TokenEndpointsApi.md#gettokenpricehistory) | **GET** /api/v2/chain/{chain}/token/{address}/price_history | Get token price history |
| [**getTokensBatch**](TokenEndpointsApi.md#gettokensbatch) | **POST** /api/v2/tokens/batch | Get tokens by contract identifiers |
| [**getTopTokens**](TokenEndpointsApi.md#gettoptokens) | **GET** /api/v2/tokens/top | Get top tokens |
| [**getTrendingTokens**](TokenEndpointsApi.md#gettrendingtokens) | **GET** /api/v2/tokens/trending | Get trending tokens |



## getToken

> TokenDetailedResponse getToken(chain, address)

Get token details

Get detailed information about a specific token by chain and contract address.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTokenRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // string | The blockchain on which the token exists
    chain: ethereum,
    // string | The contract address of the token
    address: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,
  } satisfies GetTokenRequest;

  try {
    const data = await api.getToken(body);
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
| **chain** | `string` | The blockchain on which the token exists | [Defaults to `undefined`] |
| **address** | `string` | The contract address of the token | [Defaults to `undefined`] |

### Return type

[**TokenDetailedResponse**](TokenDetailedResponse.md)

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


## getTokenActivity

> TokenSwapActivityPaginatedResponse getTokenActivity(chain, address, limit, cursor)

Get token swap activity

Get paginated swap activity for a specific token on a given chain.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTokenActivityRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // string | The blockchain on which the token exists
    chain: ethereum,
    // string | The contract address of the token
    address: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,
    // number | Number of results to return (default: 20, max: 50) (optional)
    limit: 20,
    // string | Pagination cursor for next page (optional)
    cursor: cursor_example,
  } satisfies GetTokenActivityRequest;

  try {
    const data = await api.getTokenActivity(body);
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
| **chain** | `string` | The blockchain on which the token exists | [Defaults to `undefined`] |
| **address** | `string` | The contract address of the token | [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return (default: 20, max: 50) | [Optional] [Defaults to `20`] |
| **cursor** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |

### Return type

[**TokenSwapActivityPaginatedResponse**](TokenSwapActivityPaginatedResponse.md)

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


## getTokenBalancesByAccount

> TokenBalancePaginatedResponse getTokenBalancesByAccount(address, limit, chains, sortBy, sortDirection, disableSpamFiltering, cursor)

Get token balances by account

Get fungible token balances for a specific wallet address. Returns quantity (in display units, not raw/wei), USD value, and token metadata for each token held.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTokenBalancesByAccountRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // string | Wallet address
    address: 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
    // number | Number of results to return (default: 20, max: 100) (optional)
    limit: 20,
    // Array<ChainIdentifier> | Filter by blockchain(s) (optional)
    chains: ethereum,
    // 'USD_VALUE' | 'MARKET_CAP' | 'ONE_DAY_VOLUME' | 'PRICE' | 'ONE_DAY_PRICE_CHANGE' | 'SEVEN_DAY_PRICE_CHANGE' | Sort field (default: usd_value) (optional)
    sortBy: usd_value,
    // 'asc' | 'desc' | Sort direction (default: desc) (optional)
    sortDirection: desc,
    // boolean | When true, disables OpenSea\'s heuristic spam filtering and returns tokens that would normally be hidden (low liquidity, dust, flagged-as-spam, etc.). Tokens flagged for trust & safety enforcement or as malicious are still filtered out regardless. Surfaced tokens carry a `status` field on the response indicating why they would have been filtered. (optional)
    disableSpamFiltering: false,
    // string | Pagination cursor for next page (optional)
    cursor: cursor_example,
  } satisfies GetTokenBalancesByAccountRequest;

  try {
    const data = await api.getTokenBalancesByAccount(body);
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
| **address** | `string` | Wallet address | [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return (default: 20, max: 100) | [Optional] [Defaults to `20`] |
| **chains** | `Array<ChainIdentifier>` | Filter by blockchain(s) | [Optional] |
| **sortBy** | `USD_VALUE`, `MARKET_CAP`, `ONE_DAY_VOLUME`, `PRICE`, `ONE_DAY_PRICE_CHANGE`, `SEVEN_DAY_PRICE_CHANGE` | Sort field (default: usd_value) | [Optional] [Defaults to `undefined`] [Enum: USD_VALUE, MARKET_CAP, ONE_DAY_VOLUME, PRICE, ONE_DAY_PRICE_CHANGE, SEVEN_DAY_PRICE_CHANGE] |
| **sortDirection** | `asc`, `desc` | Sort direction (default: desc) | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **disableSpamFiltering** | `boolean` | When true, disables OpenSea\&#39;s heuristic spam filtering and returns tokens that would normally be hidden (low liquidity, dust, flagged-as-spam, etc.). Tokens flagged for trust &amp; safety enforcement or as malicious are still filtered out regardless. Surfaced tokens carry a &#x60;status&#x60; field on the response indicating why they would have been filtered. | [Optional] [Defaults to `false`] |
| **cursor** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |

### Return type

[**TokenBalancePaginatedResponse**](TokenBalancePaginatedResponse.md)

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


## getTokenGroup

> TokenGroupResponse getTokenGroup(slug)

Get a token group by slug

Get detailed information about a specific token group by its slug identifier.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTokenGroupRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // string | The slug identifier of the token group
    slug: eth,
  } satisfies GetTokenGroupRequest;

  try {
    const data = await api.getTokenGroup(body);
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
| **slug** | `string` | The slug identifier of the token group | [Defaults to `undefined`] |

### Return type

[**TokenGroupResponse**](TokenGroupResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTokenGroups

> TokenGroupPaginatedResponse getTokenGroups(limit, cursor)

Get token groups

Get a paginated list of token groups sorted by market cap descending. Token groups represent equivalent currencies across different blockchains (e.g., ETH on Ethereum, Base, and Arbitrum are all in the \&quot;eth\&quot; token group).

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTokenGroupsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // number | Number of results to return (default: 50, max: 100) (optional)
    limit: 50,
    // string | Pagination cursor for next page (optional)
    cursor: cursor_example,
  } satisfies GetTokenGroupsRequest;

  try {
    const data = await api.getTokenGroups(body);
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
| **limit** | `number` | Number of results to return (default: 50, max: 100) | [Optional] [Defaults to `50`] |
| **cursor** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |

### Return type

[**TokenGroupPaginatedResponse**](TokenGroupPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getTokenOhlcv

> OhlcvResponse getTokenOhlcv(chain, address, startTime, bucketSize, endTime, fillTimeWindow)

Get token OHLCV candles

Get OHLCV (Open, High, Low, Close, Volume) candlestick data for a specific token.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTokenOhlcvRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // string | The blockchain on which the token exists
    chain: ethereum,
    // string | The contract address of the token
    address: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,
    // Date | Start time for the OHLCV window (ISO 8601)
    startTime: 2024-01-01T00:00:00Z,
    // string | Candle bucket size (1s, 1m, 5m, 15m, 1h, 4h, 1d)
    bucketSize: 1h,
    // Date | End time for the OHLCV window (ISO 8601, defaults to now) (optional)
    endTime: 2024-01-02T00:00:00Z,
    // boolean | Whether to fill empty time windows with zero-volume candles (optional)
    fillTimeWindow: false,
  } satisfies GetTokenOhlcvRequest;

  try {
    const data = await api.getTokenOhlcv(body);
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
| **chain** | `string` | The blockchain on which the token exists | [Defaults to `undefined`] |
| **address** | `string` | The contract address of the token | [Defaults to `undefined`] |
| **startTime** | `Date` | Start time for the OHLCV window (ISO 8601) | [Defaults to `undefined`] |
| **bucketSize** | `string` | Candle bucket size (1s, 1m, 5m, 15m, 1h, 4h, 1d) | [Defaults to `undefined`] |
| **endTime** | `Date` | End time for the OHLCV window (ISO 8601, defaults to now) | [Optional] [Defaults to `undefined`] |
| **fillTimeWindow** | `boolean` | Whether to fill empty time windows with zero-volume candles | [Optional] [Defaults to `false`] |

### Return type

[**OhlcvResponse**](OhlcvResponse.md)

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


## getTokenPriceHistory

> PriceHistoryResponse getTokenPriceHistory(chain, address, startTime, endTime, bucketSize)

Get token price history

Get historical price data for a specific token.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTokenPriceHistoryRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // string | The blockchain on which the token exists
    chain: ethereum,
    // string | The contract address of the token
    address: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,
    // Date | Start time for the price history window (ISO 8601)
    startTime: 2024-01-01T00:00:00Z,
    // Date | End time for the price history window (ISO 8601, defaults to now) (optional)
    endTime: 2024-01-02T00:00:00Z,
    // string | Candle bucket size for aggregation (1s, 1m, 5m, 15m, 1h, 4h, 1d) (optional)
    bucketSize: 1h,
  } satisfies GetTokenPriceHistoryRequest;

  try {
    const data = await api.getTokenPriceHistory(body);
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
| **chain** | `string` | The blockchain on which the token exists | [Defaults to `undefined`] |
| **address** | `string` | The contract address of the token | [Defaults to `undefined`] |
| **startTime** | `Date` | Start time for the price history window (ISO 8601) | [Defaults to `undefined`] |
| **endTime** | `Date` | End time for the price history window (ISO 8601, defaults to now) | [Optional] [Defaults to `undefined`] |
| **bucketSize** | `string` | Candle bucket size for aggregation (1s, 1m, 5m, 15m, 1h, 4h, 1d) | [Optional] [Defaults to `undefined`] |

### Return type

[**PriceHistoryResponse**](PriceHistoryResponse.md)

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


## getTokensBatch

> TokenBatchResponse getTokensBatch(batchTokensRequest)

Get tokens by contract identifiers

Retrieve multiple tokens in a single request by providing a list of contract identifiers (chain and address). Not-found tokens are silently omitted from the response.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTokensBatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // BatchTokensRequest
    batchTokensRequest: ...,
  } satisfies GetTokensBatchRequest;

  try {
    const data = await api.getTokensBatch(body);
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
| **batchTokensRequest** | [BatchTokensRequest](BatchTokensRequest.md) |  | |

### Return type

[**TokenBatchResponse**](TokenBatchResponse.md)

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


## getTopTokens

> TokenPaginatedResponse getTopTokens(limit, chains, cursor)

Get top tokens

Get top tokens ranked by 24-hour trading volume. Returns established tokens with high market activity.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTopTokensRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // number | Number of results to return (default: 20, max: 100) (optional)
    limit: 20,
    // Array<ChainIdentifier> | Filter by blockchain(s) (optional)
    chains: ethereum,
    // string | Pagination cursor for next page (optional)
    cursor: cursor_example,
  } satisfies GetTopTokensRequest;

  try {
    const data = await api.getTopTokens(body);
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
| **limit** | `number` | Number of results to return (default: 20, max: 100) | [Optional] [Defaults to `20`] |
| **chains** | `Array<ChainIdentifier>` | Filter by blockchain(s) | [Optional] |
| **cursor** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |

### Return type

[**TokenPaginatedResponse**](TokenPaginatedResponse.md)

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


## getTrendingTokens

> TokenPaginatedResponse getTrendingTokens(limit, chains, cursor)

Get trending tokens

Get trending tokens based on OpenSea\&#39;s trending score algorithm. Returns tokens with high momentum including memecoins and newly popular assets.

### Example

```ts
import {
  Configuration,
  TokenEndpointsApi,
} from '';
import type { GetTrendingTokensRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TokenEndpointsApi(config);

  const body = {
    // number | Number of results to return (default: 20, max: 100) (optional)
    limit: 20,
    // Array<ChainIdentifier> | Filter by blockchain(s) (optional)
    chains: ethereum,
    // string | Pagination cursor for next page (optional)
    cursor: cursor_example,
  } satisfies GetTrendingTokensRequest;

  try {
    const data = await api.getTrendingTokens(body);
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
| **limit** | `number` | Number of results to return (default: 20, max: 100) | [Optional] [Defaults to `20`] |
| **chains** | `Array<ChainIdentifier>` | Filter by blockchain(s) | [Optional] |
| **cursor** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |

### Return type

[**TokenPaginatedResponse**](TokenPaginatedResponse.md)

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


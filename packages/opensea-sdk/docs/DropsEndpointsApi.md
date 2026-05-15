# DropsEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**buildDropMintTransaction**](DropsEndpointsApi.md#builddropminttransaction) | **POST** /api/v2/drops/{slug}/mint | Build mint transaction data for a drop |
| [**deployDropContract**](DropsEndpointsApi.md#deploydropcontract) | **POST** /api/v2/drops/deploy | Build deploy contract transaction data |
| [**getDeployContractReceipt**](DropsEndpointsApi.md#getdeploycontractreceipt) | **GET** /api/v2/drops/deploy/{chain}/{tx_hash}/receipt | Get deploy contract receipt |
| [**getDropBySlug**](DropsEndpointsApi.md#getdropbyslug) | **GET** /api/v2/drops/{slug} | Get drop by collection slug |
| [**getDrops**](DropsEndpointsApi.md#getdrops) | **GET** /api/v2/drops | Get drops |



## buildDropMintTransaction

> DropMintResponse buildDropMintTransaction(slug, dropMintRequest)

Build mint transaction data for a drop

Returns ready-to-sign transaction data for minting tokens from a drop. The caller is responsible for signing and submitting the transaction. No wallet authentication is required — only an API key. The minter address in the request body determines who will receive the tokens. Stage selection is handled automatically by the backend — if multiple stages are active, the first eligible stage is used.

### Example

```ts
import {
  Configuration,
  DropsEndpointsApi,
} from '';
import type { BuildDropMintTransactionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DropsEndpointsApi(config);

  const body = {
    // string | The collection slug identifying the drop
    slug: boredapeyachtclub,
    // DropMintRequest
    dropMintRequest: ...,
  } satisfies BuildDropMintTransactionRequest;

  try {
    const data = await api.buildDropMintTransaction(body);
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
| **slug** | `string` | The collection slug identifying the drop | [Defaults to `undefined`] |
| **dropMintRequest** | [DropMintRequest](DropMintRequest.md) |  | |

### Return type

[**DropMintResponse**](DropMintResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ready-to-sign transaction data including target contract, calldata, and value |  -  |
| **400** | Invalid request: bad address format, invalid quantity, or missing required fields |  -  |
| **404** | Drop or collection not found for the given slug |  -  |
| **409** | Drop is not currently active for minting (not started, ended, or paused) |  -  |
| **422** | Minting precondition failed: wallet not in allowlist, mint limit exceeded, or supply exhausted |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deployDropContract

> DropDeployResponse deployDropContract(dropDeployRequest)

Build deploy contract transaction data

Returns ready-to-sign transaction data for deploying a new NFT drop contract. The caller is responsible for signing and submitting the transaction.

### Example

```ts
import {
  Configuration,
  DropsEndpointsApi,
} from '';
import type { DeployDropContractRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DropsEndpointsApi(config);

  const body = {
    // DropDeployRequest
    dropDeployRequest: ...,
  } satisfies DeployDropContractRequest;

  try {
    const data = await api.deployDropContract(body);
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
| **dropDeployRequest** | [DropDeployRequest](DropDeployRequest.md) |  | |

### Return type

[**DropDeployResponse**](DropDeployResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ready-to-sign transaction data for contract deployment |  -  |
| **400** | Invalid request: unsupported drop_type/token_type combination, bad address format, or missing required fields |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDeployContractReceipt

> DropDeployReceiptResponse getDeployContractReceipt(chain, txHash)

Get deploy contract receipt

Check the status of a contract deployment transaction. Returns the deployment status and, on success, the deployed contract address and linked collection slug.

### Example

```ts
import {
  Configuration,
  DropsEndpointsApi,
} from '';
import type { GetDeployContractReceiptRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DropsEndpointsApi(config);

  const body = {
    // string | Chain slug (e.g. ethereum, base)
    chain: ethereum,
    // string | Transaction hash of the deployment transaction
    txHash: 0xabc123...,
  } satisfies GetDeployContractReceiptRequest;

  try {
    const data = await api.getDeployContractReceipt(body);
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
| **chain** | `string` | Chain slug (e.g. ethereum, base) | [Defaults to `undefined`] |
| **txHash** | `string` | Transaction hash of the deployment transaction | [Defaults to `undefined`] |

### Return type

[**DropDeployReceiptResponse**](DropDeployReceiptResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deployment receipt status |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDropBySlug

> DropDetailedResponse getDropBySlug(slug)

Get drop by collection slug

Get detailed drop information for a collection, including stages and supply.

### Example

```ts
import {
  Configuration,
  DropsEndpointsApi,
} from '';
import type { GetDropBySlugRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DropsEndpointsApi(config);

  const body = {
    // string | Collection slug
    slug: cool-cats,
  } satisfies GetDropBySlugRequest;

  try {
    const data = await api.getDropBySlug(body);
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

### Return type

[**DropDetailedResponse**](DropDetailedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detailed drop information |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getDrops

> DropPaginatedResponse getDrops(type, limit, chains, cursor)

Get drops

Get a list of NFT drops (mints) by type: featured, upcoming, or recently_minted. Results may be fewer than the requested limit due to post-fetch filtering.

### Example

```ts
import {
  Configuration,
  DropsEndpointsApi,
} from '';
import type { GetDropsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DropsEndpointsApi(config);

  const body = {
    // string | Drop calendar type: featured, upcoming, or recently_minted (optional)
    type: featured,
    // number | Number of results to return (1-100, default: 20) (optional)
    limit: 20,
    // Array<ChainIdentifier> | Comma-separated list of chains to filter by (e.g. ethereum, base). Omit to return drops on all chains. (optional)
    chains: ethereum,base,
    // string | Pagination cursor for next page (optional)
    cursor: cursor_example,
  } satisfies GetDropsRequest;

  try {
    const data = await api.getDrops(body);
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
| **type** | `string` | Drop calendar type: featured, upcoming, or recently_minted | [Optional] [Defaults to `&#39;featured&#39;`] |
| **limit** | `number` | Number of results to return (1-100, default: 20) | [Optional] [Defaults to `20`] |
| **chains** | `Array<ChainIdentifier>` | Comma-separated list of chains to filter by (e.g. ethereum, base). Omit to return drops on all chains. | [Optional] |
| **cursor** | `string` | Pagination cursor for next page | [Optional] [Defaults to `undefined`] |

### Return type

[**DropPaginatedResponse**](DropPaginatedResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of drops |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


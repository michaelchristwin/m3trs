# SwapEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSwapQuote**](SwapEndpointsApi.md#getswapquote) | **GET** /api/v2/swap/quote | Get swap quote |
| [**postSwapExecute**](SwapEndpointsApi.md#postswapexecute) | **POST** /api/v2/swap/execute | Execute a token swap |



## getSwapQuote

> SwapQuoteResponse getSwapQuote(fromChain, fromAddress, toChain, toAddress, quantity, address, slippage, recipient)

Get swap quote

Get a quote for swapping tokens, including price details and executable transaction data.

### Example

```ts
import {
  Configuration,
  SwapEndpointsApi,
} from '';
import type { GetSwapQuoteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SwapEndpointsApi(config);

  const body = {
    // string | Chain of the token to swap from
    fromChain: ethereum,
    // string | Contract address of the token to swap from
    fromAddress: 0x0000000000000000000000000000000000000000,
    // string | Chain of the token to swap to
    toChain: ethereum,
    // string | Contract address of the token to swap to
    toAddress: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,
    // string | Amount to swap in the smallest unit of the token (e.g. wei for ETH)
    quantity: 1000000000000000000,
    // string | Wallet address executing the swap
    address: 0x1234567890abcdef1234567890abcdef12345678,
    // number | Slippage tolerance (0.0 to 0.5, default: 0.01) (optional)
    slippage: 0.01,
    // string | Recipient address (defaults to sender address) (optional)
    recipient: 0x1234567890abcdef1234567890abcdef12345678,
  } satisfies GetSwapQuoteRequest;

  try {
    const data = await api.getSwapQuote(body);
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
| **fromChain** | `string` | Chain of the token to swap from | [Defaults to `undefined`] |
| **fromAddress** | `string` | Contract address of the token to swap from | [Defaults to `undefined`] |
| **toChain** | `string` | Chain of the token to swap to | [Defaults to `undefined`] |
| **toAddress** | `string` | Contract address of the token to swap to | [Defaults to `undefined`] |
| **quantity** | `string` | Amount to swap in the smallest unit of the token (e.g. wei for ETH) | [Defaults to `undefined`] |
| **address** | `string` | Wallet address executing the swap | [Defaults to `undefined`] |
| **slippage** | `number` | Slippage tolerance (0.0 to 0.5, default: 0.01) | [Optional] [Defaults to `0.01`] |
| **recipient** | `string` | Recipient address (defaults to sender address) | [Optional] [Defaults to `undefined`] |

### Return type

[**SwapQuoteResponse**](SwapQuoteResponse.md)

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


## postSwapExecute

> SwapExecuteResponse postSwapExecute(swapExecuteRequest)

Execute a token swap

Get executable transactions for token-to-token swaps. Supports same-chain and cross-chain swaps with multiple from/to assets.

### Example

```ts
import {
  Configuration,
  SwapEndpointsApi,
} from '';
import type { PostSwapExecuteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SwapEndpointsApi(config);

  const body = {
    // SwapExecuteRequest
    swapExecuteRequest: ...,
  } satisfies PostSwapExecuteRequest;

  try {
    const data = await api.postSwapExecute(body);
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
| **swapExecuteRequest** | [SwapExecuteRequest](SwapExecuteRequest.md) |  | |

### Return type

[**SwapExecuteResponse**](SwapExecuteResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Swap execution data retrieved successfully |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


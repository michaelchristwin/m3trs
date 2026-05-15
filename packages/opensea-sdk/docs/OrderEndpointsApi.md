# OrderEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelOrder**](OrderEndpointsApi.md#cancelorder) | **POST** /api/v2/orders/chain/{chain}/protocol/{protocol_address}/{order_hash}/cancel | Cancel an order |
| [**getOrder**](OrderEndpointsApi.md#getorder) | **GET** /api/v2/orders/chain/{chain}/protocol/{protocol_address}/{order_hash} | Get an order |



## cancelOrder

> CancelResponse cancelOrder(chain, protocolAddress, orderHash, xApiKey, cancelRequest)

Cancel an order

Offchain cancel a single order, offer or listing, by its order hash when protected by the SignedZone. Protocol and Chain are required to prevent hash collisions. Please note cancellation is only assured if a fulfillment signature was not vended prior to cancellation.

### Example

```ts
import {
  Configuration,
  OrderEndpointsApi,
} from '';
import type { CancelOrderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrderEndpointsApi(config);

  const body = {
    // string
    chain: chain_example,
    // string
    protocolAddress: protocolAddress_example,
    // string
    orderHash: orderHash_example,
    // string (optional)
    xApiKey: xApiKey_example,
    // CancelRequest (optional)
    cancelRequest: ...,
  } satisfies CancelOrderRequest;

  try {
    const data = await api.cancelOrder(body);
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
| **protocolAddress** | `string` |  | [Defaults to `undefined`] |
| **orderHash** | `string` |  | [Defaults to `undefined`] |
| **xApiKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **cancelRequest** | [CancelRequest](CancelRequest.md) |  | [Optional] |

### Return type

[**CancelResponse**](CancelResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order cancelled successfully |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrder

> GetOrderResponse getOrder(chain, protocolAddress, orderHash)

Get an order

Get a single order by its order hash.

### Example

```ts
import {
  Configuration,
  OrderEndpointsApi,
} from '';
import type { GetOrderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OrderEndpointsApi(config);

  const body = {
    // string | Blockchain chain identifier
    chain: chain_example,
    // string | Protocol contract address
    protocolAddress: protocolAddress_example,
    // string | Order hash
    orderHash: orderHash_example,
  } satisfies GetOrderRequest;

  try {
    const data = await api.getOrder(body);
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
| **chain** | `string` | Blockchain chain identifier | [Defaults to `undefined`] |
| **protocolAddress** | `string` | Protocol contract address | [Defaults to `undefined`] |
| **orderHash** | `string` | Order hash | [Defaults to `undefined`] |

### Return type

[**GetOrderResponse**](GetOrderResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order details retrieved successfully |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


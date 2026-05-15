# TransactionEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getTransactionReceipt**](TransactionEndpointsApi.md#gettransactionreceipt) | **POST** /api/v2/transactions/receipt | Get transaction receipt |



## getTransactionReceipt

> TransactionReceiptResponse getTransactionReceipt(transactionReceiptRequest)

Get transaction receipt

Get the receipt/status for a submitted transaction. Works for all transaction types including listing fulfillments, cross-chain buys, sweeps, offer fulfillments, and token swaps. Poll this endpoint after submitting transactions to check completion status.

### Example

```ts
import {
  Configuration,
  TransactionEndpointsApi,
} from '';
import type { GetTransactionReceiptRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new TransactionEndpointsApi(config);

  const body = {
    // TransactionReceiptRequest
    transactionReceiptRequest: ...,
  } satisfies GetTransactionReceiptRequest;

  try {
    const data = await api.getTransactionReceipt(body);
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
| **transactionReceiptRequest** | [TransactionReceiptRequest](TransactionReceiptRequest.md) |  | |

### Return type

[**TransactionReceiptResponse**](TransactionReceiptResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Transaction receipt retrieved |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


# ContractEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getContract**](ContractEndpointsApi.md#getcontract) | **GET** /api/v2/chain/{chain}/contract/{address} | Get contract |
| [**getPaymentToken**](ContractEndpointsApi.md#getpaymenttoken) | **GET** /api/v2/chain/{chain}/payment_token/{address} | Get payment token |



## getContract

> ContractResponse getContract(address, chain)

Get contract

Get contract metadata including collection information, contract standards, and ownership details.

### Example

```ts
import {
  Configuration,
  ContractEndpointsApi,
} from '';
import type { GetContractRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContractEndpointsApi(config);

  const body = {
    // string | The unique public blockchain identifier for the contract
    address: address_example,
    // string | The blockchain on which to filter the results
    chain: chain_example,
  } satisfies GetContractRequest;

  try {
    const data = await api.getContract(body);
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
| **address** | `string` | The unique public blockchain identifier for the contract | [Defaults to `undefined`] |
| **chain** | `string` | The blockchain on which to filter the results | [Defaults to `undefined`] |

### Return type

[**ContractResponse**](ContractResponse.md)

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


## getPaymentToken

> PaymentToken getPaymentToken(address, chain)

Get payment token

Get a payment token by chain and contract address.

### Example

```ts
import {
  Configuration,
  ContractEndpointsApi,
} from '';
import type { GetPaymentTokenRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ContractEndpointsApi(config);

  const body = {
    // string | The unique public blockchain identifier for the contract
    address: address_example,
    // string | The blockchain on which to filter the results
    chain: chain_example,
  } satisfies GetPaymentTokenRequest;

  try {
    const data = await api.getPaymentToken(body);
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
| **address** | `string` | The unique public blockchain identifier for the contract | [Defaults to `undefined`] |
| **chain** | `string` | The blockchain on which to filter the results | [Defaults to `undefined`] |

### Return type

[**PaymentToken**](PaymentToken.md)

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


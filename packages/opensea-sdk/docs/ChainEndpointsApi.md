# ChainEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getChains**](ChainEndpointsApi.md#getchains) | **GET** /api/v2/chains | Get supported chains |



## getChains

> ChainListResponse getChains()

Get supported chains

Get all supported blockchain chains with metadata including name, native currency symbol, swap support, and block explorer information.

### Example

```ts
import {
  Configuration,
  ChainEndpointsApi,
} from '';
import type { GetChainsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ChainEndpointsApi(config);

  try {
    const data = await api.getChains();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ChainListResponse**](ChainListResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of supported chains |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


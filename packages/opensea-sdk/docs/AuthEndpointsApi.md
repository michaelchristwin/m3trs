# AuthEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInstantApiKey**](AuthEndpointsApi.md#createinstantapikey) | **POST** /api/v2/auth/keys | Create an instant API key |



## createInstantApiKey

> InstantApiKeyResponse createInstantApiKey()

Create an instant API key

Creates a free-tier API key instantly without authentication. The key can be used immediately for all API endpoints. Rate limited to 3 keys per hour per IP. Keys expire after 30 days.

### Example

```ts
import {
  Configuration,
  AuthEndpointsApi,
} from '';
import type { CreateInstantApiKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AuthEndpointsApi(config);

  try {
    const data = await api.createInstantApiKey();
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

[**InstantApiKeyResponse**](InstantApiKeyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | API key created successfully |  -  |
| **429** | Key creation rate limit exceeded |  -  |
| **500** | Internal server error (e.g. database failure) |  -  |
| **503** | Feature is currently disabled or temporarily unavailable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


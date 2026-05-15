# SearchEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**search**](SearchEndpointsApi.md#search) | **GET** /api/v2/search | Search across OpenSea |



## search

> SearchResponse search(query, chains, assetTypes, limit)

Search across OpenSea

Search across collections, tokens, NFTs, and accounts. Results are ranked by relevance.

### Example

```ts
import {
  Configuration,
  SearchEndpointsApi,
} from '';
import type { SearchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new SearchEndpointsApi(config);

  const body = {
    // string | Search query text
    query: bored ape,
    // Array<ChainIdentifier> | Filter by blockchain(s) (optional)
    chains: ...,
    // Array<string> | Filter by asset type(s). Valid values: collection, nft, token, account. Defaults to [collection, token] if not specified. (optional)
    assetTypes: ...,
    // number | Number of results to return (default: 20, max: 50) (optional)
    limit: 56,
  } satisfies SearchRequest;

  try {
    const data = await api.search(body);
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
| **query** | `string` | Search query text | [Defaults to `undefined`] |
| **chains** | `Array<ChainIdentifier>` | Filter by blockchain(s) | [Optional] |
| **assetTypes** | `Array<string>` | Filter by asset type(s). Valid values: collection, nft, token, account. Defaults to [collection, token] if not specified. | [Optional] |
| **limit** | `number` | Number of results to return (default: 20, max: 50) | [Optional] [Defaults to `20`] |

### Return type

[**SearchResponse**](SearchResponse.md)

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


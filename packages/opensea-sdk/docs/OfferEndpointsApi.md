# OfferEndpointsApi

All URIs are relative to *https://api.opensea.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**buildOfferV2**](OfferEndpointsApi.md#buildofferv2) | **POST** /api/v2/offers/build | Build a criteria offer |
| [**generateOfferFulfillmentDataV2**](OfferEndpointsApi.md#generateofferfulfillmentdatav2) | **POST** /api/v2/offers/fulfillment_data | Fulfill an offer |
| [**getBestOfferNft**](OfferEndpointsApi.md#getbestoffernft) | **GET** /api/v2/offers/collection/{slug}/nfts/{identifier}/best | Get best offer by NFT |
| [**getOffersCollection**](OfferEndpointsApi.md#getofferscollection) | **GET** /api/v2/offers/collection/{slug} | Get offers by collection |
| [**getOffersCollectionTrait**](OfferEndpointsApi.md#getofferscollectiontrait) | **GET** /api/v2/offers/collection/{slug}/traits | Get trait offers for a collection |
| [**getOffersNft**](OfferEndpointsApi.md#getoffersnft) | **GET** /api/v2/offers/collection/{slug}/nfts/{identifier} | Get offers by NFT |
| [**listOffersCollectionAll**](OfferEndpointsApi.md#listofferscollectionall) | **GET** /api/v2/offers/collection/{slug}/all | Get all offers by collection |
| [**postCriteriaOfferV2**](OfferEndpointsApi.md#postcriteriaofferv2) | **POST** /api/v2/offers | Create a criteria offer |
| [**postOffer**](OfferEndpointsApi.md#postoffer) | **POST** /api/v2/orders/{chain}/{protocol}/offers | Create an item offer |



## buildOfferV2

> BuildOfferResponse buildOfferV2(buildOfferRequest)

Build a criteria offer

Build a portion of a criteria offer including the consideration item, zone, and zone hash needed to post an offer. For trait offers on supported collections, the identifierOrCriteria in the returned consideration will be \&#39;0\&#39; (no merkle root computation needed). For other collections, a computed merkle root is returned. When identifierOrCriteria is \&#39;0\&#39;, the encodedTokenIds field is informational only and not required for constructing the onchain order.

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { BuildOfferV2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // BuildOfferRequest
    buildOfferRequest: ...,
  } satisfies BuildOfferV2Request;

  try {
    const data = await api.buildOfferV2(body);
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
| **buildOfferRequest** | [BuildOfferRequest](BuildOfferRequest.md) |  | |

### Return type

[**BuildOfferResponse**](BuildOfferResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Criteria offer built successfully |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateOfferFulfillmentDataV2

> FulfillListingResponse generateOfferFulfillmentDataV2(fullfillmentDataRequest)

Fulfill an offer

Retrieve all the information, including signatures, needed to fulfill an offer directly onchain. For trait offers with identifierOrCriteria \&#39;0\&#39;, the server validates that the specified token matches the offer\&#39;s trait criteria before generating fulfillment data.

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { GenerateOfferFulfillmentDataV2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // FullfillmentDataRequest
    fullfillmentDataRequest: ...,
  } satisfies GenerateOfferFulfillmentDataV2Request;

  try {
    const data = await api.generateOfferFulfillmentDataV2(body);
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
| **fullfillmentDataRequest** | [FullfillmentDataRequest](FullfillmentDataRequest.md) |  | |

### Return type

[**FulfillListingResponse**](FulfillListingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Offer fulfillment data retrieved successfully |  -  |
| **400** | The request is invalid The order_hash does not exist The chain is not an EVM Chain The protocol_address is not a supported Seaport contract For other error reasons, see the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBestOfferNft

> Offer getBestOfferNft(slug, identifier)

Get best offer by NFT

Get the best offer for an NFT.

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { GetBestOfferNftRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // string | Unique string to identify a collection on OpenSea
    slug: slug_example,
    // string | NFT token id
    identifier: identifier_example,
  } satisfies GetBestOfferNftRequest;

  try {
    const data = await api.getBestOfferNft(body);
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
| **slug** | `string` | Unique string to identify a collection on OpenSea | [Defaults to `undefined`] |
| **identifier** | `string` | NFT token id | [Defaults to `undefined`] |

### Return type

[**Offer**](Offer.md)

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


## getOffersCollection

> OffersResponse getOffersCollection(slug, limit, nextValue)

Get offers by collection

Get collection offers on a collection.

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { GetOffersCollectionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // string | Unique string to identify a collection on OpenSea
    slug: slug_example,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies GetOffersCollectionRequest;

  try {
    const data = await api.getOffersCollection(body);
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
| **slug** | `string` | Unique string to identify a collection on OpenSea | [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOffersCollectionTrait

> OffersResponse getOffersCollectionTrait(slug, mode, type, value, floatValue, intValue, minValue, maxValue, traits, limit, nextValue)

Get trait offers for a collection

Get trait offers for a collection. Use the &#x60;mode&#x60; parameter to select the bid category.  **Single string trait:** &#x60;?mode&#x3D;STRING&amp;type&#x3D;Background&amp;value&#x3D;Red&#x60; **Multiple string traits:** &#x60;?mode&#x3D;MULTI&amp;traits&#x3D;[{\&quot;traitType\&quot;:\&quot;Background\&quot;,\&quot;value\&quot;:\&quot;Red\&quot;},{\&quot;traitType\&quot;:\&quot;Eyes\&quot;,\&quot;value\&quot;:\&quot;Blue\&quot;}]&#x60; **Numeric trait range:** &#x60;?mode&#x3D;NUMERIC&amp;type&#x3D;Level&amp;min_value&#x3D;1&amp;max_value&#x3D;10&#x60;  Omit filter params to discover all bids of that mode (e.g. &#x60;?mode&#x3D;NUMERIC&#x60; returns all numeric bids).  If &#x60;mode&#x60; is omitted, the mode is inferred from the params for backward compatibility.

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { GetOffersCollectionTraitRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // string | Unique string to identify a collection on OpenSea
    slug: slug_example,
    // 'STRING' | 'NUMERIC' | 'MULTI' | Bid category: STRING (single string trait), MULTI (multiple string traits), or NUMERIC (numeric trait range). If omitted, inferred from params. (optional)
    mode: mode_example,
    // string | Trait type name (optional)
    type: type_example,
    // string | Trait value as string (optional)
    value: value_example,
    // number | Trait value as float (optional)
    floatValue: 1.2,
    // number | Trait value as integer (optional)
    intValue: 56,
    // number | Minimum value for numeric trait range queries (optional)
    minValue: 3.4,
    // number | Maximum value for numeric trait range queries (optional)
    maxValue: 3.4,
    // string | JSON array of trait filters for multi-trait queries. Each element has \'traitType\' and \'value\' fields. Example: [{\"traitType\":\"Background\",\"value\":\"Red\"}] (optional)
    traits: [{"traitType":"Background","value":"Red"}],
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies GetOffersCollectionTraitRequest;

  try {
    const data = await api.getOffersCollectionTrait(body);
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
| **slug** | `string` | Unique string to identify a collection on OpenSea | [Defaults to `undefined`] |
| **mode** | `STRING`, `NUMERIC`, `MULTI` | Bid category: STRING (single string trait), MULTI (multiple string traits), or NUMERIC (numeric trait range). If omitted, inferred from params. | [Optional] [Defaults to `undefined`] [Enum: STRING, NUMERIC, MULTI] |
| **type** | `string` | Trait type name | [Optional] [Defaults to `undefined`] |
| **value** | `string` | Trait value as string | [Optional] [Defaults to `undefined`] |
| **floatValue** | `number` | Trait value as float | [Optional] [Defaults to `undefined`] |
| **intValue** | `number` | Trait value as integer | [Optional] [Defaults to `undefined`] |
| **minValue** | `number` | Minimum value for numeric trait range queries | [Optional] [Defaults to `undefined`] |
| **maxValue** | `number` | Maximum value for numeric trait range queries | [Optional] [Defaults to `undefined`] |
| **traits** | `string` | JSON array of trait filters for multi-trait queries. Each element has \&#39;traitType\&#39; and \&#39;value\&#39; fields. Example: [{\&quot;traitType\&quot;:\&quot;Background\&quot;,\&quot;value\&quot;:\&quot;Red\&quot;}] | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOffersNft

> OffersResponse getOffersNft(slug, identifier, limit, nextValue)

Get offers by NFT

Get offers for an NFT.

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { GetOffersNftRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // string | Unique string to identify a collection on OpenSea
    slug: slug_example,
    // string | NFT token id
    identifier: identifier_example,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies GetOffersNftRequest;

  try {
    const data = await api.getOffersNft(body);
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
| **slug** | `string` | Unique string to identify a collection on OpenSea | [Defaults to `undefined`] |
| **identifier** | `string` | NFT token id | [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOffersCollectionAll

> OffersResponse listOffersCollectionAll(slug, maker, limit, nextValue)

Get all offers by collection

Get all offers for a collection.

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { ListOffersCollectionAllRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // string | Unique string to identify a collection on OpenSea
    slug: slug_example,
    // string | Filter by the wallet address of the order maker (optional)
    maker: maker_example,
    // number | Number of items to return per page (optional)
    limit: 20,
    // string (optional)
    nextValue: nextValue_example,
  } satisfies ListOffersCollectionAllRequest;

  try {
    const data = await api.listOffersCollectionAll(body);
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
| **slug** | `string` | Unique string to identify a collection on OpenSea | [Defaults to `undefined`] |
| **maker** | `string` | Filter by the wallet address of the order maker | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of items to return per page | [Optional] [Defaults to `undefined`] |
| **nextValue** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **200** | OK |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postCriteriaOfferV2

> Offer postCriteriaOfferV2(offerWithCriteriaRequest)

Create a criteria offer

Create a criteria offer to purchase any NFT in a collection or which matches the specified trait. For trait offers where the Build Offer endpoint returns identifierOrCriteria \&#39;0\&#39;, use that value directly — trait matching is validated server-side at fulfillment time rather than via onchain merkle proof.

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { PostCriteriaOfferV2Request } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // OfferWithCriteriaRequest
    offerWithCriteriaRequest: ...,
  } satisfies PostCriteriaOfferV2Request;

  try {
    const data = await api.postCriteriaOfferV2(body);
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
| **offerWithCriteriaRequest** | [OfferWithCriteriaRequest](OfferWithCriteriaRequest.md) |  | |

### Return type

[**Offer**](Offer.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Criteria offer created successfully |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postOffer

> Offer postOffer(chain, protocol, seaportRequest)

Create an item offer

Create an offer to purchase a single NFT (ERC721 or ERC1155).

### Example

```ts
import {
  Configuration,
  OfferEndpointsApi,
} from '';
import type { PostOfferRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new OfferEndpointsApi(config);

  const body = {
    // string
    chain: chain_example,
    // string
    protocol: protocol_example,
    // SeaportRequest
    seaportRequest: ...,
  } satisfies PostOfferRequest;

  try {
    const data = await api.postOffer(body);
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
| **protocol** | `string` |  | [Defaults to `undefined`] |
| **seaportRequest** | [SeaportRequest](SeaportRequest.md) |  | |

### Return type

[**Offer**](Offer.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Item offer created successfully |  -  |
| **400** | For error reasons, review the response data. |  -  |
| **500** | Internal server error. Please open a support ticket so OpenSea can investigate. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


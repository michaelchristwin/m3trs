
# SearchResultResponse

A single search result with a type discriminator and the corresponding typed object

## Properties

Name | Type
------------ | -------------
`type` | string
`collection` | [CollectionSearchResponse](CollectionSearchResponse.md)
`token` | [TokenSearchResponse](TokenSearchResponse.md)
`nft` | [NftSearchResponse](NftSearchResponse.md)
`account` | [AccountSearchResponse](AccountSearchResponse.md)

## Example

```typescript
import type { SearchResultResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "type": collection,
  "collection": null,
  "token": null,
  "nft": null,
  "account": null,
} satisfies SearchResultResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchResultResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



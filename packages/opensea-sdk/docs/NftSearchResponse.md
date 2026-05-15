
# NftSearchResponse

NFT search result

## Properties

Name | Type
------------ | -------------
`identifier` | string
`collection` | string
`contract` | string
`name` | string
`imageUrl` | string
`openseaUrl` | string

## Example

```typescript
import type { NftSearchResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "identifier": 1234,
  "collection": bored-ape-yacht-club,
  "contract": null,
  "name": null,
  "imageUrl": null,
  "openseaUrl": null,
} satisfies NftSearchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NftSearchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



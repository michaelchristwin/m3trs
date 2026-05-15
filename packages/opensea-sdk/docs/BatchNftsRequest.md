
# BatchNftsRequest

Request body for batch NFT retrieval by identifiers

## Properties

Name | Type
------------ | -------------
`identifiers` | [Array&lt;NftIdentifierInput&gt;](NftIdentifierInput.md)

## Example

```typescript
import type { BatchNftsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "identifiers": null,
} satisfies BatchNftsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchNftsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



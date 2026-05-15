
# DropResponse

Summary of an NFT drop

## Properties

Name | Type
------------ | -------------
`collectionSlug` | string
`collectionName` | string
`chain` | string
`contractAddress` | string
`dropType` | string
`isMinting` | boolean
`imageUrl` | string
`openseaUrl` | string

## Example

```typescript
import type { DropResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "collectionSlug": cool-cats,
  "collectionName": Cool Cats,
  "chain": ethereum,
  "contractAddress": null,
  "dropType": seadrop_v1_erc721,
  "isMinting": null,
  "imageUrl": null,
  "openseaUrl": null,
} satisfies DropResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DropResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



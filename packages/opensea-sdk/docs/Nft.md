
# Nft


## Properties

Name | Type
------------ | -------------
`identifier` | string
`collection` | string
`contract` | string
`tokenStandard` | string
`name` | string
`description` | string
`imageUrl` | string
`displayImageUrl` | string
`displayAnimationUrl` | string
`metadataUrl` | string
`openseaUrl` | string
`updatedAt` | string
`isDisabled` | boolean
`isNsfw` | boolean
`originalImageUrl` | string
`originalAnimationUrl` | string
`traits` | [Array&lt;Trait&gt;](Trait.md)

## Example

```typescript
import type { Nft } from ''

// TODO: Update the object below with actual values
const example = {
  "identifier": null,
  "collection": null,
  "contract": null,
  "tokenStandard": null,
  "name": null,
  "description": null,
  "imageUrl": null,
  "displayImageUrl": null,
  "displayAnimationUrl": null,
  "metadataUrl": null,
  "openseaUrl": null,
  "updatedAt": null,
  "isDisabled": null,
  "isNsfw": null,
  "originalImageUrl": null,
  "originalAnimationUrl": null,
  "traits": null,
} satisfies Nft

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Nft
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



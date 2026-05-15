
# CollectionSearchResponse

Collection search result

## Properties

Name | Type
------------ | -------------
`collection` | string
`name` | string
`imageUrl` | string
`isDisabled` | boolean
`isNsfw` | boolean
`openseaUrl` | string

## Example

```typescript
import type { CollectionSearchResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "collection": bored-ape-yacht-club,
  "name": Bored Ape Yacht Club,
  "imageUrl": null,
  "isDisabled": null,
  "isNsfw": null,
  "openseaUrl": null,
} satisfies CollectionSearchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionSearchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



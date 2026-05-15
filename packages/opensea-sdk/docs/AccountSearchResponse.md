
# AccountSearchResponse

Account search result

## Properties

Name | Type
------------ | -------------
`address` | string
`username` | string
`profileImageUrl` | string
`openseaUrl` | string

## Example

```typescript
import type { AccountSearchResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "username": null,
  "profileImageUrl": null,
  "openseaUrl": null,
} satisfies AccountSearchResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountSearchResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



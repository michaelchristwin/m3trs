
# TokenPaginatedResponse

Paginated list of tokens

## Properties

Name | Type
------------ | -------------
`tokens` | [Array&lt;TokenResponse&gt;](TokenResponse.md)
`next` | string

## Example

```typescript
import type { TokenPaginatedResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "tokens": null,
  "next": null,
} satisfies TokenPaginatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenPaginatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



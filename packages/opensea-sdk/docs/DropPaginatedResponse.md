
# DropPaginatedResponse

Paginated list of drops

## Properties

Name | Type
------------ | -------------
`drops` | [Array&lt;DropResponse&gt;](DropResponse.md)
`next` | string

## Example

```typescript
import type { DropPaginatedResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "drops": null,
  "next": null,
} satisfies DropPaginatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DropPaginatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



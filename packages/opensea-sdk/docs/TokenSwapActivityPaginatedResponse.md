
# TokenSwapActivityPaginatedResponse

Paginated list of token swap activity events

## Properties

Name | Type
------------ | -------------
`swapEvents` | [Array&lt;TokenSwapActivityResponse&gt;](TokenSwapActivityResponse.md)
`next` | string

## Example

```typescript
import type { TokenSwapActivityPaginatedResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "swapEvents": null,
  "next": null,
} satisfies TokenSwapActivityPaginatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenSwapActivityPaginatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



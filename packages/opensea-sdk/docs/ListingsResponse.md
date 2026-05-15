
# ListingsResponse


## Properties

Name | Type
------------ | -------------
`listings` | [Array&lt;Listing&gt;](Listing.md)
`next` | string

## Example

```typescript
import type { ListingsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "listings": null,
  "next": null,
} satisfies ListingsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListingsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



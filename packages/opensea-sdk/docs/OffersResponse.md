
# OffersResponse


## Properties

Name | Type
------------ | -------------
`offers` | [Array&lt;Offer&gt;](Offer.md)
`next` | string

## Example

```typescript
import type { OffersResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "offers": null,
  "next": null,
} satisfies OffersResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OffersResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# FloorPriceHistoryResponse

Floor price history for a collection

## Properties

Name | Type
------------ | -------------
`floorPrices` | [Array&lt;FloorPricePointResponse&gt;](FloorPricePointResponse.md)

## Example

```typescript
import type { FloorPriceHistoryResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "floorPrices": null,
} satisfies FloorPriceHistoryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FloorPriceHistoryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



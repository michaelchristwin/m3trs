
# NftAnalyticsResponse

Analytics data for an NFT including sales and floor price history

## Properties

Name | Type
------------ | -------------
`sales` | [Array&lt;NftSalePointResponse&gt;](NftSalePointResponse.md)
`floorPrices` | [Array&lt;FloorPricePointResponse&gt;](FloorPricePointResponse.md)

## Example

```typescript
import type { NftAnalyticsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "sales": null,
  "floorPrices": null,
} satisfies NftAnalyticsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NftAnalyticsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



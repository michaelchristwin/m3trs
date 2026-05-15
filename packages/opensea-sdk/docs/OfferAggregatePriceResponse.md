
# OfferAggregatePriceResponse

Price information for an offer aggregate

## Properties

Name | Type
------------ | -------------
`usdPrice` | string
`tokenUnit` | number
`symbol` | string
`chain` | string

## Example

```typescript
import type { OfferAggregatePriceResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "usdPrice": null,
  "tokenUnit": null,
  "symbol": null,
  "chain": null,
} satisfies OfferAggregatePriceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OfferAggregatePriceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



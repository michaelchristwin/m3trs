
# CollectionOfferAggregateResponse

An aggregated offer bucket

## Properties

Name | Type
------------ | -------------
`offerPrice` | [OfferAggregatePriceResponse](OfferAggregatePriceResponse.md)
`totalValue` | [OfferAggregatePriceResponse](OfferAggregatePriceResponse.md)
`totalOffers` | number
`bidders` | [Array&lt;BidderResponse&gt;](BidderResponse.md)

## Example

```typescript
import type { CollectionOfferAggregateResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "offerPrice": null,
  "totalValue": null,
  "totalOffers": null,
  "bidders": null,
} satisfies CollectionOfferAggregateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionOfferAggregateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# CollectionOfferAggregatesPaginatedResponse

Paginated list of collection offer aggregates

## Properties

Name | Type
------------ | -------------
`offerAggregates` | [Array&lt;CollectionOfferAggregateResponse&gt;](CollectionOfferAggregateResponse.md)
`next` | string

## Example

```typescript
import type { CollectionOfferAggregatesPaginatedResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "offerAggregates": null,
  "next": null,
} satisfies CollectionOfferAggregatesPaginatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionOfferAggregatesPaginatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



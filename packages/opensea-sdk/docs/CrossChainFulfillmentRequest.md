
# CrossChainFulfillmentRequest

Request to fulfill one or more listings using a payment token on a different chain or a different token on the same chain

## Properties

Name | Type
------------ | -------------
`listings` | [Array&lt;ListingObject&gt;](ListingObject.md)
`fulfiller` | [FulfillerObject](FulfillerObject.md)
`payment` | [CrossChainPaymentToken](CrossChainPaymentToken.md)
`recipient` | string

## Example

```typescript
import type { CrossChainFulfillmentRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "listings": null,
  "fulfiller": null,
  "payment": null,
  "recipient": null,
} satisfies CrossChainFulfillmentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrossChainFulfillmentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# SweepCollectionRequest

Request to sweep buy items from a collection

## Properties

Name | Type
------------ | -------------
`collectionSlug` | string
`payment` | [CrossChainPaymentToken](CrossChainPaymentToken.md)
`maxItems` | number
`maxPricePerItem` | string
`buyer` | string
`recipient` | string

## Example

```typescript
import type { SweepCollectionRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "collectionSlug": pudgypenguins,
  "payment": null,
  "maxItems": 5,
  "maxPricePerItem": 10.0,
  "buyer": 0x...,
  "recipient": null,
} satisfies SweepCollectionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SweepCollectionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



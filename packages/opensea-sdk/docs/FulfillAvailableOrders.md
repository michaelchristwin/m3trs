
# FulfillAvailableOrders


## Properties

Name | Type
------------ | -------------
`orders` | [Array&lt;Order&gt;](Order.md)
`offerFulfillments` | Array&lt;Array&lt;FulfillmentComponent&gt;&gt;
`considerationFulfillments` | Array&lt;Array&lt;FulfillmentComponent&gt;&gt;
`fulfillerConduitKey` | string
`maximumFulfilled` | [Uint256](Uint256.md)

## Example

```typescript
import type { FulfillAvailableOrders } from ''

// TODO: Update the object below with actual values
const example = {
  "orders": null,
  "offerFulfillments": null,
  "considerationFulfillments": null,
  "fulfillerConduitKey": null,
  "maximumFulfilled": null,
} satisfies FulfillAvailableOrders

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FulfillAvailableOrders
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



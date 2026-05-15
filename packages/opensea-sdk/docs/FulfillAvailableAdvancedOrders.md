
# FulfillAvailableAdvancedOrders


## Properties

Name | Type
------------ | -------------
`orders` | [Array&lt;AdvancedOrder&gt;](AdvancedOrder.md)
`criteriaResolvers` | [Array&lt;CriteriaResolver&gt;](CriteriaResolver.md)
`offerFulfillments` | Array&lt;Array&lt;FulfillmentComponent&gt;&gt;
`considerationFulfillments` | Array&lt;Array&lt;FulfillmentComponent&gt;&gt;
`fulfillerConduitKey` | string
`recipient` | [Address](Address.md)
`maximumFulfilled` | [Uint256](Uint256.md)

## Example

```typescript
import type { FulfillAvailableAdvancedOrders } from ''

// TODO: Update the object below with actual values
const example = {
  "orders": null,
  "criteriaResolvers": null,
  "offerFulfillments": null,
  "considerationFulfillments": null,
  "fulfillerConduitKey": null,
  "recipient": null,
  "maximumFulfilled": null,
} satisfies FulfillAvailableAdvancedOrders

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FulfillAvailableAdvancedOrders
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



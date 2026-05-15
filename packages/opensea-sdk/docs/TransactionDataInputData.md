
# TransactionDataInputData


## Properties

Name | Type
------------ | -------------
`advancedOrder` | [AdvancedOrder](AdvancedOrder.md)
`criteriaResolvers` | [Array&lt;CriteriaResolver&gt;](CriteriaResolver.md)
`fulfillerConduitKey` | string
`recipient` | [Address](Address.md)
`orders` | [Array&lt;Order&gt;](Order.md)
`offerFulfillments` | Array&lt;Array&lt;FulfillmentComponent&gt;&gt;
`considerationFulfillments` | Array&lt;Array&lt;FulfillmentComponent&gt;&gt;
`maximumFulfilled` | [Uint256](Uint256.md)
`parameters` | [BasicOrderParameters](BasicOrderParameters.md)
`order` | [Order](Order.md)
`fulfillments` | [Array&lt;Fulfillment&gt;](Fulfillment.md)

## Example

```typescript
import type { TransactionDataInputData } from ''

// TODO: Update the object below with actual values
const example = {
  "advancedOrder": null,
  "criteriaResolvers": null,
  "fulfillerConduitKey": null,
  "recipient": null,
  "orders": null,
  "offerFulfillments": null,
  "considerationFulfillments": null,
  "maximumFulfilled": null,
  "parameters": null,
  "order": null,
  "fulfillments": null,
} satisfies TransactionDataInputData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionDataInputData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



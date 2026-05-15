
# MatchAdvancedOrders


## Properties

Name | Type
------------ | -------------
`orders` | [Array&lt;AdvancedOrder&gt;](AdvancedOrder.md)
`criteriaResolvers` | [Array&lt;CriteriaResolver&gt;](CriteriaResolver.md)
`fulfillments` | [Array&lt;Fulfillment&gt;](Fulfillment.md)
`recipient` | [Address](Address.md)

## Example

```typescript
import type { MatchAdvancedOrders } from ''

// TODO: Update the object below with actual values
const example = {
  "orders": null,
  "criteriaResolvers": null,
  "fulfillments": null,
  "recipient": null,
} satisfies MatchAdvancedOrders

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MatchAdvancedOrders
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



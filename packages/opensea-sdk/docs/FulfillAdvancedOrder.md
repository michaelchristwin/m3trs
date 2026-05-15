
# FulfillAdvancedOrder


## Properties

Name | Type
------------ | -------------
`advancedOrder` | [AdvancedOrder](AdvancedOrder.md)
`criteriaResolvers` | [Array&lt;CriteriaResolver&gt;](CriteriaResolver.md)
`fulfillerConduitKey` | string
`recipient` | [Address](Address.md)

## Example

```typescript
import type { FulfillAdvancedOrder } from ''

// TODO: Update the object below with actual values
const example = {
  "advancedOrder": null,
  "criteriaResolvers": null,
  "fulfillerConduitKey": null,
  "recipient": null,
} satisfies FulfillAdvancedOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FulfillAdvancedOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



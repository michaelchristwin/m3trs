
# AdvancedOrder


## Properties

Name | Type
------------ | -------------
`value` | [Array&lt;Type&gt;](Type.md)
`parameters` | [OrderParameters](OrderParameters.md)
`numerator` | number
`denominator` | number
`signature` | string
`extraData` | string
`typeAsString` | string
`nativeValueCopy` | Array&lt;any&gt;

## Example

```typescript
import type { AdvancedOrder } from ''

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "parameters": null,
  "numerator": null,
  "denominator": null,
  "signature": null,
  "extraData": null,
  "typeAsString": null,
  "nativeValueCopy": null,
} satisfies AdvancedOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdvancedOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



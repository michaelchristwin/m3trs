
# Fulfillment


## Properties

Name | Type
------------ | -------------
`value` | [Array&lt;Type&gt;](Type.md)
`offerComponents` | [Array&lt;FulfillmentComponent&gt;](FulfillmentComponent.md)
`considerationComponents` | [Array&lt;FulfillmentComponent&gt;](FulfillmentComponent.md)
`typeAsString` | string
`nativeValueCopy` | Array&lt;any&gt;

## Example

```typescript
import type { Fulfillment } from ''

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "offerComponents": null,
  "considerationComponents": null,
  "typeAsString": null,
  "nativeValueCopy": null,
} satisfies Fulfillment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Fulfillment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



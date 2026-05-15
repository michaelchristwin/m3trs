
# Order


## Properties

Name | Type
------------ | -------------
`orderHash` | string
`chain` | string
`protocolData` | [ProtocolData](ProtocolData.md)
`protocolAddress` | string
`remainingQuantity` | number
`orderCreatedAt` | number

## Example

```typescript
import type { Order } from ''

// TODO: Update the object below with actual values
const example = {
  "orderHash": null,
  "chain": null,
  "protocolData": null,
  "protocolAddress": null,
  "remainingQuantity": null,
  "orderCreatedAt": null,
} satisfies Order

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Order
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



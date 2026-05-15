
# GetOrderResponseOrder


## Properties

Name | Type
------------ | -------------
`orderHash` | string
`chain` | string
`protocolData` | [ProtocolData](ProtocolData.md)
`protocolAddress` | string
`remainingQuantity` | number
`orderCreatedAt` | number
`price` | [Price](Price.md)
`type` | string
`status` | string
`criteria` | [Criteria](Criteria.md)

## Example

```typescript
import type { GetOrderResponseOrder } from ''

// TODO: Update the object below with actual values
const example = {
  "orderHash": null,
  "chain": null,
  "protocolData": null,
  "protocolAddress": null,
  "remainingQuantity": null,
  "orderCreatedAt": null,
  "price": null,
  "type": null,
  "status": null,
  "criteria": null,
} satisfies GetOrderResponseOrder

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetOrderResponseOrder
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



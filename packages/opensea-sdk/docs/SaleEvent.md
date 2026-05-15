
# SaleEvent


## Properties

Name | Type
------------ | -------------
`eventType` | string
`eventTimestamp` | number
`transaction` | string
`orderHash` | string
`protocolAddress` | string
`chain` | string
`payment` | [Payment](Payment.md)
`closingDate` | number
`seller` | string
`buyer` | string
`quantity` | number
`nft` | [Nft](Nft.md)

## Example

```typescript
import type { SaleEvent } from ''

// TODO: Update the object below with actual values
const example = {
  "eventType": null,
  "eventTimestamp": null,
  "transaction": null,
  "orderHash": null,
  "protocolAddress": null,
  "chain": null,
  "payment": null,
  "closingDate": null,
  "seller": null,
  "buyer": null,
  "quantity": null,
  "nft": null,
} satisfies SaleEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SaleEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



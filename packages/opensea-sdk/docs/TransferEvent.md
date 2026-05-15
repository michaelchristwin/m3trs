
# TransferEvent


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
`transferType` | string
`fromAddress` | string
`toAddress` | string
`nft` | [Nft](Nft.md)
`quantity` | number

## Example

```typescript
import type { TransferEvent } from ''

// TODO: Update the object below with actual values
const example = {
  "eventType": null,
  "eventTimestamp": null,
  "transaction": null,
  "orderHash": null,
  "protocolAddress": null,
  "chain": null,
  "payment": null,
  "transferType": null,
  "fromAddress": null,
  "toAddress": null,
  "nft": null,
  "quantity": null,
} satisfies TransferEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



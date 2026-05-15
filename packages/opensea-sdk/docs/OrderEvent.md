
# OrderEvent


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
`orderType` | string
`startDate` | number
`expirationDate` | number
`asset` | [Nft](Nft.md)
`quantity` | number
`maker` | string
`taker` | string
`criteria` | [Criteria](Criteria.md)
`isPrivateListing` | boolean

## Example

```typescript
import type { OrderEvent } from ''

// TODO: Update the object below with actual values
const example = {
  "eventType": null,
  "eventTimestamp": null,
  "transaction": null,
  "orderHash": null,
  "protocolAddress": null,
  "chain": null,
  "payment": null,
  "orderType": null,
  "startDate": null,
  "expirationDate": null,
  "asset": null,
  "quantity": null,
  "maker": null,
  "taker": null,
  "criteria": null,
  "isPrivateListing": null,
} satisfies OrderEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrderEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# SeaportParameters


## Properties

Name | Type
------------ | -------------
`offerer` | string
`zone` | string
`offer` | [Array&lt;OfferItem&gt;](OfferItem.md)
`consideration` | [Array&lt;ConsiderationItem&gt;](ConsiderationItem.md)
`orderType` | number
`startTime` | string
`endTime` | string
`zoneHash` | string
`salt` | string
`conduitKey` | string
`totalOriginalConsiderationItems` | number
`counter` | string

## Example

```typescript
import type { SeaportParameters } from ''

// TODO: Update the object below with actual values
const example = {
  "offerer": null,
  "zone": null,
  "offer": null,
  "consideration": null,
  "orderType": null,
  "startTime": null,
  "endTime": null,
  "zoneHash": null,
  "salt": null,
  "conduitKey": null,
  "totalOriginalConsiderationItems": null,
  "counter": null,
} satisfies SeaportParameters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeaportParameters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# OrderParameters


## Properties

Name | Type
------------ | -------------
`value` | [Array&lt;Type&gt;](Type.md)
`offerer` | string
`zone` | string
`offer` | [Array&lt;OfferItem&gt;](OfferItem.md)
`consideration` | [Array&lt;ConsiderationItem&gt;](ConsiderationItem.md)
`orderType` | number
`startTime` | number
`endTime` | number
`zoneHash` | string
`salt` | number
`conduitKey` | string
`totalOriginalConsiderationItems` | number
`typeAsString` | string
`nativeValueCopy` | Array&lt;any&gt;

## Example

```typescript
import type { OrderParameters } from ''

// TODO: Update the object below with actual values
const example = {
  "value": null,
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
  "typeAsString": null,
  "nativeValueCopy": null,
} satisfies OrderParameters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrderParameters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



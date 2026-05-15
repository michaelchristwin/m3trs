
# ModelParameters


## Properties

Name | Type
------------ | -------------
`offerer` | string
`offer` | [Array&lt;Item&gt;](Item.md)
`consideration` | [Array&lt;ConsiderationItem&gt;](ConsiderationItem.md)
`startTime` | string
`endTime` | string
`orderType` | number
`zone` | string
`zoneHash` | string
`salt` | string
`conduitKey` | string
`totalOriginalConsiderationItems` | number
`counter` | number

## Example

```typescript
import type { ModelParameters } from ''

// TODO: Update the object below with actual values
const example = {
  "offerer": null,
  "offer": null,
  "consideration": null,
  "startTime": null,
  "endTime": null,
  "orderType": null,
  "zone": null,
  "zoneHash": null,
  "salt": null,
  "conduitKey": null,
  "totalOriginalConsiderationItems": null,
  "counter": null,
} satisfies ModelParameters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelParameters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



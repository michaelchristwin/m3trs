
# OfferWithCriteriaRequest


## Properties

Name | Type
------------ | -------------
`protocolData` | [SeaportProtocolDataModel](SeaportProtocolDataModel.md)
`criteria` | [CriteriaRequest](CriteriaRequest.md)
`protocolAddress` | string

## Example

```typescript
import type { OfferWithCriteriaRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "protocolData": null,
  "criteria": null,
  "protocolAddress": null,
} satisfies OfferWithCriteriaRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OfferWithCriteriaRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# BasicOrderParameters


## Properties

Name | Type
------------ | -------------
`value` | [Array&lt;Type&gt;](Type.md)
`considerationToken` | string
`considerationIdentifier` | number
`considerationAmount` | number
`offerer` | string
`zone` | string
`offerToken` | string
`offerIdentifier` | number
`offerAmount` | number
`basicOrderType` | number
`startTime` | number
`endTime` | number
`zoneHash` | string
`salt` | number
`offererConduitKey` | string
`fulfillerConduitKey` | string
`totalOriginalAdditionalRecipients` | number
`additionalRecipients` | [Array&lt;AdditionalRecipient&gt;](AdditionalRecipient.md)
`signature` | string
`typeAsString` | string
`nativeValueCopy` | Array&lt;any&gt;

## Example

```typescript
import type { BasicOrderParameters } from ''

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "considerationToken": null,
  "considerationIdentifier": null,
  "considerationAmount": null,
  "offerer": null,
  "zone": null,
  "offerToken": null,
  "offerIdentifier": null,
  "offerAmount": null,
  "basicOrderType": null,
  "startTime": null,
  "endTime": null,
  "zoneHash": null,
  "salt": null,
  "offererConduitKey": null,
  "fulfillerConduitKey": null,
  "totalOriginalAdditionalRecipients": null,
  "additionalRecipients": null,
  "signature": null,
  "typeAsString": null,
  "nativeValueCopy": null,
} satisfies BasicOrderParameters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BasicOrderParameters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



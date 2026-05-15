
# OfferItem


## Properties

Name | Type
------------ | -------------
`itemType` | number
`token` | string
`identifierOrCriteria` | string
`startAmount` | string
`endAmount` | string

## Example

```typescript
import type { OfferItem } from ''

// TODO: Update the object below with actual values
const example = {
  "itemType": null,
  "token": null,
  "identifierOrCriteria": null,
  "startAmount": null,
  "endAmount": null,
} satisfies OfferItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OfferItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



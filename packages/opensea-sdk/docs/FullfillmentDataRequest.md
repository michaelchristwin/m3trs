
# FullfillmentDataRequest


## Properties

Name | Type
------------ | -------------
`offer` | [OfferObject](OfferObject.md)
`fulfiller` | [FulfillerObject](FulfillerObject.md)
`consideration` | [ConsiderationObject](ConsiderationObject.md)
`unitsToFill` | number
`includeOptionalCreatorFees` | boolean

## Example

```typescript
import type { FullfillmentDataRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "offer": null,
  "fulfiller": null,
  "consideration": null,
  "unitsToFill": null,
  "includeOptionalCreatorFees": null,
} satisfies FullfillmentDataRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FullfillmentDataRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



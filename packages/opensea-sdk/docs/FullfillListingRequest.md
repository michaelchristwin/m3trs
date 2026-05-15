
# FullfillListingRequest


## Properties

Name | Type
------------ | -------------
`listing` | [ListingObject](ListingObject.md)
`fulfiller` | [FulfillerObject](FulfillerObject.md)
`consideration` | [ConsiderationObject](ConsiderationObject.md)
`recipient` | string
`unitsToFill` | number
`includeOptionalCreatorFees` | boolean

## Example

```typescript
import type { FullfillListingRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "listing": null,
  "fulfiller": null,
  "consideration": null,
  "recipient": null,
  "unitsToFill": null,
  "includeOptionalCreatorFees": null,
} satisfies FullfillListingRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FullfillListingRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



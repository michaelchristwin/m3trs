
# CreateListingActionsRequest

Request to get listing creation actions

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;ListingItem&gt;](ListingItem.md)
`address` | string
`useCreatorFee` | boolean
`taker` | string

## Example

```typescript
import type { CreateListingActionsRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "address": 0x...,
  "useCreatorFee": null,
  "taker": null,
} satisfies CreateListingActionsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateListingActionsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# ListingItem

An item to list for sale

## Properties

Name | Type
------------ | -------------
`chain` | string
`contract` | string
`tokenId` | string
`quantity` | number
`price` | [ListingPrice](ListingPrice.md)
`startTime` | string
`endTime` | string

## Example

```typescript
import type { ListingItem } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "contract": 0x...,
  "tokenId": 1234,
  "quantity": 1,
  "price": null,
  "startTime": 2026-05-01T00:00:00Z,
  "endTime": 2026-06-01T00:00:00Z,
} satisfies ListingItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListingItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



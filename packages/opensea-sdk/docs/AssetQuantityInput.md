
# AssetQuantityInput

An asset with quantity in base units

## Properties

Name | Type
------------ | -------------
`chain` | string
`contract` | string
`tokenId` | string
`amount` | string

## Example

```typescript
import type { AssetQuantityInput } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "contract": 0x0000000000000000000000000000000000000000,
  "tokenId": 1234,
  "amount": 1000000000000000000,
} satisfies AssetQuantityInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetQuantityInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



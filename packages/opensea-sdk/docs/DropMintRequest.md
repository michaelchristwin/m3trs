
# DropMintRequest

Mint request parameters

## Properties

Name | Type
------------ | -------------
`minter` | string
`quantity` | number

## Example

```typescript
import type { DropMintRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "minter": 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
  "quantity": 1,
} satisfies DropMintRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DropMintRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



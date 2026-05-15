
# AssetIdentifierResponse

Asset identifier with chain, contract address, and optional token ID

## Properties

Name | Type
------------ | -------------
`chain` | string
`contract` | string
`tokenId` | string

## Example

```typescript
import type { AssetIdentifierResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "contract": 0xBd3531dA5CF5857e7CfAA92426877b022e612cf8,
  "tokenId": 1234,
} satisfies AssetIdentifierResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetIdentifierResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



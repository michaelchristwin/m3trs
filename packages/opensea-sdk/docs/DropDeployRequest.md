
# DropDeployRequest

Deploy contract request parameters

## Properties

Name | Type
------------ | -------------
`chain` | string
`contractName` | string
`contractSymbol` | string
`dropType` | string
`tokenType` | string
`sender` | string

## Example

```typescript
import type { DropDeployRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "contractName": My NFT Collection,
  "contractSymbol": MNFT,
  "dropType": seadrop_v1_erc721,
  "tokenType": erc721_standard,
  "sender": 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
} satisfies DropDeployRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DropDeployRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



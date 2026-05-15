
# NftIdentifierInput

An NFT identifier consisting of chain, contract address, and token ID

## Properties

Name | Type
------------ | -------------
`chain` | string
`contractAddress` | string
`tokenId` | string

## Example

```typescript
import type { NftIdentifierInput } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "contractAddress": 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D,
  "tokenId": 1,
} satisfies NftIdentifierInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NftIdentifierInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



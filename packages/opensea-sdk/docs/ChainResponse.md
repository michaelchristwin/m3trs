
# ChainResponse

Information about a supported blockchain

## Properties

Name | Type
------------ | -------------
`chain` | string
`name` | string
`symbol` | string
`supportsSwaps` | boolean
`blockExplorer` | string
`blockExplorerUrl` | string

## Example

```typescript
import type { ChainResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "name": Ethereum,
  "symbol": ETH,
  "supportsSwaps": null,
  "blockExplorer": Etherscan,
  "blockExplorerUrl": https://etherscan.io,
} satisfies ChainResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChainResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



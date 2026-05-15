
# TokenBaseResponse

Common token identity fields shared across token responses

## Properties

Name | Type
------------ | -------------
`address` | string
`chain` | string
`name` | string
`symbol` | string
`imageUrl` | string
`usdPrice` | string
`decimals` | number
`openseaUrl` | string

## Example

```typescript
import type { TokenBaseResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "address": 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,
  "chain": ethereum,
  "name": USD Coin,
  "symbol": USDC,
  "imageUrl": null,
  "usdPrice": 1.0,
  "decimals": 6,
  "openseaUrl": null,
} satisfies TokenBaseResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenBaseResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



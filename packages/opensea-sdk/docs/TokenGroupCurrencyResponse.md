
# TokenGroupCurrencyResponse

A currency within a token group

## Properties

Name | Type
------------ | -------------
`address` | string
`chain` | string
`name` | string
`symbol` | string
`imageUrl` | string
`decimals` | number
`usdPrice` | string

## Example

```typescript
import type { TokenGroupCurrencyResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "address": 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,
  "chain": ethereum,
  "name": Wrapped Ether,
  "symbol": WETH,
  "imageUrl": null,
  "decimals": 18,
  "usdPrice": 2345.67,
} satisfies TokenGroupCurrencyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenGroupCurrencyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



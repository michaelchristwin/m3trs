
# TokenStatsResponse

Market statistics for a token

## Properties

Name | Type
------------ | -------------
`marketCapUsd` | number
`fdvUsd` | number
`circulatingSupply` | number
`maxSupply` | number
`totalSupply` | number
`volume24h` | number
`priceChange1h` | number
`priceChange24h` | number
`priceChange7d` | number
`priceChange30d` | number

## Example

```typescript
import type { TokenStatsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "marketCapUsd": null,
  "fdvUsd": null,
  "circulatingSupply": null,
  "maxSupply": null,
  "totalSupply": null,
  "volume24h": null,
  "priceChange1h": null,
  "priceChange24h": null,
  "priceChange7d": null,
  "priceChange30d": null,
} satisfies TokenStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



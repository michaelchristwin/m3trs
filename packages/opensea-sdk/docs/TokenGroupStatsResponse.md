
# TokenGroupStatsResponse

Market statistics for a token group

## Properties

Name | Type
------------ | -------------
`marketCapUsd` | string
`volumeUsd24h` | string
`priceUsd` | string
`priceChangePercent24h` | number
`totalSupply` | string
`holders` | number
`rollingStats` | [TokenGroupRollingStatsResponse](TokenGroupRollingStatsResponse.md)

## Example

```typescript
import type { TokenGroupStatsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "marketCapUsd": null,
  "volumeUsd24h": null,
  "priceUsd": null,
  "priceChangePercent24h": null,
  "totalSupply": null,
  "holders": null,
  "rollingStats": null,
} satisfies TokenGroupStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenGroupStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



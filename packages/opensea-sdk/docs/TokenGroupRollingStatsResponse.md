
# TokenGroupRollingStatsResponse

Rolling statistics for a token group over multiple time periods

## Properties

Name | Type
------------ | -------------
`volume1d` | string
`volume7d` | string
`volume30d` | string
`priceChange1d` | number
`priceChange7d` | number
`priceChange30d` | number

## Example

```typescript
import type { TokenGroupRollingStatsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "volume1d": null,
  "volume7d": null,
  "volume30d": null,
  "priceChange1d": null,
  "priceChange7d": null,
  "priceChange30d": null,
} satisfies TokenGroupRollingStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenGroupRollingStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



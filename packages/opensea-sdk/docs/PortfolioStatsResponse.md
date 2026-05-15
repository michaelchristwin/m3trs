
# PortfolioStatsResponse

Portfolio stats including total value, P&L, and asset breakdown

## Properties

Name | Type
------------ | -------------
`totalValueUsd` | string
`nftValueUsd` | string
`tokenValueUsd` | string
`pnlAbsolute` | string
`pnlPercentage` | string
`timeframe` | string

## Example

```typescript
import type { PortfolioStatsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "totalValueUsd": 125430.5,
  "nftValueUsd": 98200.0,
  "tokenValueUsd": 27230.5,
  "pnlAbsolute": +1250.00,
  "pnlPercentage": +1.01,
  "timeframe": WEEK,
} satisfies PortfolioStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



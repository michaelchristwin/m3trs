
# PortfolioHistoryDataPoint

A single net worth data point

## Properties

Name | Type
------------ | -------------
`timestamp` | Date
`valueUsd` | string
`tokenValueUsd` | string
`nftValueUsd` | string

## Example

```typescript
import type { PortfolioHistoryDataPoint } from ''

// TODO: Update the object below with actual values
const example = {
  "timestamp": 2026-04-28T00:00:00Z,
  "valueUsd": 124180.0,
  "tokenValueUsd": 26000.0,
  "nftValueUsd": 98180.0,
} satisfies PortfolioHistoryDataPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioHistoryDataPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



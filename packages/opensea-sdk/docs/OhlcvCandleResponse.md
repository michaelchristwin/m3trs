
# OhlcvCandleResponse

An OHLCV candle data point

## Properties

Name | Type
------------ | -------------
`time` | Date
`open` | number
`high` | number
`low` | number
`close` | number
`volume` | number

## Example

```typescript
import type { OhlcvCandleResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "time": null,
  "open": null,
  "high": null,
  "low": null,
  "close": null,
  "volume": null,
} satisfies OhlcvCandleResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OhlcvCandleResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



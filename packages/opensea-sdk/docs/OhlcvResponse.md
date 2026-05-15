
# OhlcvResponse

List of OHLCV candle data points

## Properties

Name | Type
------------ | -------------
`candles` | [Array&lt;OhlcvCandleResponse&gt;](OhlcvCandleResponse.md)

## Example

```typescript
import type { OhlcvResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "candles": null,
} satisfies OhlcvResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OhlcvResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



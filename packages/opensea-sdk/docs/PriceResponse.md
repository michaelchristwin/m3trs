
# PriceResponse

Price information for an asset

## Properties

Name | Type
------------ | -------------
`amount` | string
`currency` | string
`usd` | string

## Example

```typescript
import type { PriceResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "amount": 5.5,
  "currency": ETH,
  "usd": 19250.0,
} satisfies PriceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



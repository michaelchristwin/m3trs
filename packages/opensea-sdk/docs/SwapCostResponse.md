
# SwapCostResponse

A cost component of the swap

## Properties

Name | Type
------------ | -------------
`type` | string
`usd` | string

## Example

```typescript
import type { SwapCostResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "type": GAS,
  "usd": 0.5,
} satisfies SwapCostResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwapCostResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# SwapTransactionResponse

A transaction to be submitted onchain to execute a swap

## Properties

Name | Type
------------ | -------------
`chain` | string
`to` | string
`data` | string
`value` | string

## Example

```typescript
import type { SwapTransactionResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "to": null,
  "data": null,
  "value": null,
} satisfies SwapTransactionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwapTransactionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



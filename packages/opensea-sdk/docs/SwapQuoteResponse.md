
# SwapQuoteResponse

Swap quote with price details and executable transactions

## Properties

Name | Type
------------ | -------------
`quote` | [SwapQuoteDetails](SwapQuoteDetails.md)
`transactions` | [Array&lt;SwapTransactionResponse&gt;](SwapTransactionResponse.md)

## Example

```typescript
import type { SwapQuoteResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "quote": null,
  "transactions": null,
} satisfies SwapQuoteResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwapQuoteResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



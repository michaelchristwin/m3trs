
# SwapExecuteResponse

Response containing quote details and executable swap transactions

## Properties

Name | Type
------------ | -------------
`quote` | [SwapQuoteDetails](SwapQuoteDetails.md)
`transactions` | [Array&lt;SwapTransactionResponse&gt;](SwapTransactionResponse.md)

## Example

```typescript
import type { SwapExecuteResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "quote": null,
  "transactions": null,
} satisfies SwapExecuteResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwapExecuteResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# TransactionReceiptRequest

Request to get a transaction receipt/status

## Properties

Name | Type
------------ | -------------
`transactionIdentifiers` | [Array&lt;TransactionIdentifierInput&gt;](TransactionIdentifierInput.md)
`swapQuote` | [SwapQuoteInput](SwapQuoteInput.md)
`relayRequestId` | string
`requestId` | string

## Example

```typescript
import type { TransactionReceiptRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "transactionIdentifiers": null,
  "swapQuote": null,
  "relayRequestId": null,
  "requestId": null,
} satisfies TransactionReceiptRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionReceiptRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



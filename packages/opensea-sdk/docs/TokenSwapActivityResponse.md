
# TokenSwapActivityResponse

A token swap activity event

## Properties

Name | Type
------------ | -------------
`id` | string
`timestamp` | Date
`senderAddress` | string
`fromToken` | [TokenAmountResponse](TokenAmountResponse.md)
`toToken` | [TokenAmountResponse](TokenAmountResponse.md)
`transactionHash` | string
`userOpHash` | string
`swapProtocol` | string
`chain` | string

## Example

```typescript
import type { TokenSwapActivityResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "timestamp": null,
  "senderAddress": null,
  "fromToken": null,
  "toToken": null,
  "transactionHash": null,
  "userOpHash": null,
  "swapProtocol": null,
  "chain": null,
} satisfies TokenSwapActivityResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenSwapActivityResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# CrossChainPaymentToken

Payment token to use for cross-chain fulfillment

## Properties

Name | Type
------------ | -------------
`chain` | string
`tokenAddress` | string

## Example

```typescript
import type { CrossChainPaymentToken } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": base,
  "tokenAddress": 0x0000000000000000000000000000000000000000,
} satisfies CrossChainPaymentToken

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrossChainPaymentToken
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



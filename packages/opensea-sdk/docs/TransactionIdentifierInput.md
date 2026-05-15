
# TransactionIdentifierInput

A transaction identifier with optional swap provider

## Properties

Name | Type
------------ | -------------
`transactionHash` | string
`chain` | string
`swapProvider` | string

## Example

```typescript
import type { TransactionIdentifierInput } from ''

// TODO: Update the object below with actual values
const example = {
  "transactionHash": 0xabc123...,
  "chain": ethereum,
  "swapProvider": RELAY,
} satisfies TransactionIdentifierInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionIdentifierInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



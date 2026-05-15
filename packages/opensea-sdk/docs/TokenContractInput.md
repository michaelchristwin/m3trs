
# TokenContractInput

A token contract identifier consisting of chain and address

## Properties

Name | Type
------------ | -------------
`chain` | string
`address` | string

## Example

```typescript
import type { TokenContractInput } from ''

// TODO: Update the object below with actual values
const example = {
  "chain": ethereum,
  "address": 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,
} satisfies TokenContractInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenContractInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



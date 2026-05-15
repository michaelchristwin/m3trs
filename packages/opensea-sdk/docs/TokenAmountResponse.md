
# TokenAmountResponse

Token amount with contract and value information

## Properties

Name | Type
------------ | -------------
`address` | string
`chain` | string
`amountToken` | number
`amountUsd` | string
`amountNative` | number

## Example

```typescript
import type { TokenAmountResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "chain": null,
  "amountToken": null,
  "amountUsd": null,
  "amountNative": null,
} satisfies TokenAmountResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenAmountResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



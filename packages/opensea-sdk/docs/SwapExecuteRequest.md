
# SwapExecuteRequest

Request body for executing a token swap

## Properties

Name | Type
------------ | -------------
`fromAssets` | [Array&lt;SwapAssetInput&gt;](SwapAssetInput.md)
`toAssets` | [Array&lt;SwapAssetInput&gt;](SwapAssetInput.md)
`address` | string
`recipient` | string
`slippageTolerance` | number

## Example

```typescript
import type { SwapExecuteRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "fromAssets": null,
  "toAssets": null,
  "address": 0x1234567890abcdef1234567890abcdef12345678,
  "recipient": null,
  "slippageTolerance": 0.01,
} satisfies SwapExecuteRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwapExecuteRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



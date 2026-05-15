
# SwapQuoteInput

The original swap quote assets

## Properties

Name | Type
------------ | -------------
`fromAssets` | [Array&lt;AssetQuantityInput&gt;](AssetQuantityInput.md)
`toAssets` | [Array&lt;AssetQuantityInput&gt;](AssetQuantityInput.md)

## Example

```typescript
import type { SwapQuoteInput } from ''

// TODO: Update the object below with actual values
const example = {
  "fromAssets": null,
  "toAssets": null,
} satisfies SwapQuoteInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwapQuoteInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



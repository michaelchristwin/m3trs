
# SwapQuoteDetails

Price and fee details for a swap quote

## Properties

Name | Type
------------ | -------------
`totalPriceUsd` | number
`totalCostUsd` | number
`slippageTolerance` | number
`estimatedDurationMs` | number
`marketplaceFeeBps` | number
`priceImpact` | [SwapPriceImpact](SwapPriceImpact.md)
`swapProvider` | string
`costs` | [Array&lt;SwapCostResponse&gt;](SwapCostResponse.md)
`routeErrors` | [Array&lt;SwapRouteErrorResponse&gt;](SwapRouteErrorResponse.md)

## Example

```typescript
import type { SwapQuoteDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "totalPriceUsd": 1850.5,
  "totalCostUsd": 1869.0,
  "slippageTolerance": 0.01,
  "estimatedDurationMs": 30000,
  "marketplaceFeeBps": 50,
  "priceImpact": null,
  "swapProvider": RELAY,
  "costs": null,
  "routeErrors": null,
} satisfies SwapQuoteDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SwapQuoteDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



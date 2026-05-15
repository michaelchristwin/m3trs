
# TransactionReceiptResponse

Transaction receipt with status and asset details

## Properties

Name | Type
------------ | -------------
`status` | string
`failReason` | string
`assetReceipts` | [Array&lt;AssetReceiptResponse&gt;](AssetReceiptResponse.md)
`failedAssetReceipts` | [Array&lt;AssetReceiptResponse&gt;](AssetReceiptResponse.md)
`totalSpent` | [TotalSpentResponse](TotalSpentResponse.md)
`missingAssets` | [Array&lt;AssetIdentifierResponse&gt;](AssetIdentifierResponse.md)
`crossChainRefunded` | boolean

## Example

```typescript
import type { TransactionReceiptResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "status": SUCCESS,
  "failReason": null,
  "assetReceipts": null,
  "failedAssetReceipts": null,
  "totalSpent": null,
  "missingAssets": null,
  "crossChainRefunded": null,
} satisfies TransactionReceiptResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionReceiptResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



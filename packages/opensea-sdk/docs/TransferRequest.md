
# TransferRequest

Request to transfer NFTs or tokens between wallets

## Properties

Name | Type
------------ | -------------
`assets` | [Array&lt;TransferAsset&gt;](TransferAsset.md)
`fromAddress` | string
`toAddress` | string

## Example

```typescript
import type { TransferRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "assets": null,
  "fromAddress": 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,
  "toAddress": 0x28c6c06298d514db089934071355e5743bf21d60,
} satisfies TransferRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



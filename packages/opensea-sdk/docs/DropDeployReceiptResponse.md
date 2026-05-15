
# DropDeployReceiptResponse

Deploy contract receipt status

## Properties

Name | Type
------------ | -------------
`status` | string
`contractAddress` | string
`chain` | string
`collectionSlug` | string

## Example

```typescript
import type { DropDeployReceiptResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "status": success,
  "contractAddress": null,
  "chain": null,
  "collectionSlug": null,
} satisfies DropDeployReceiptResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DropDeployReceiptResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



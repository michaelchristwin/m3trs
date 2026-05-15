
# DropMintResponse

Ready-to-sign mint transaction data

## Properties

Name | Type
------------ | -------------
`to` | string
`data` | string
`value` | string
`chain` | string

## Example

```typescript
import type { DropMintResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "to": null,
  "data": null,
  "value": null,
  "chain": null,
} satisfies DropMintResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DropMintResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



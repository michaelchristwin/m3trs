
# DropDeployResponse

Ready-to-sign deploy contract transaction data

## Properties

Name | Type
------------ | -------------
`to` | string
`data` | string
`value` | string
`chain` | string

## Example

```typescript
import type { DropDeployResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "to": null,
  "data": null,
  "value": null,
  "chain": null,
} satisfies DropDeployResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DropDeployResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



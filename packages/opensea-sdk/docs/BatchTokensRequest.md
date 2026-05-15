
# BatchTokensRequest

Request body for batch token retrieval by contract identifiers

## Properties

Name | Type
------------ | -------------
`contracts` | [Array&lt;TokenContractInput&gt;](TokenContractInput.md)

## Example

```typescript
import type { BatchTokensRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "contracts": null,
} satisfies BatchTokensRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchTokensRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



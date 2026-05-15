
# TransactionData


## Properties

Name | Type
------------ | -------------
`_function` | string
`chain` | number
`to` | string
`value` | string
`inputData` | [TransactionDataInputData](TransactionDataInputData.md)

## Example

```typescript
import type { TransactionData } from ''

// TODO: Update the object below with actual values
const example = {
  "_function": null,
  "chain": null,
  "to": null,
  "value": null,
  "inputData": null,
} satisfies TransactionData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



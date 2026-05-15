
# SeaportRequest


## Properties

Name | Type
------------ | -------------
`parameters` | [SeaportParameters](SeaportParameters.md)
`protocolAddress` | string
`signature` | string

## Example

```typescript
import type { SeaportRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "parameters": null,
  "protocolAddress": null,
  "signature": null,
} satisfies SeaportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeaportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



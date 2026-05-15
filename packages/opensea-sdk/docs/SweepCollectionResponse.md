
# SweepCollectionResponse

Response containing ordered blockchain actions to execute for a collection sweep

## Properties

Name | Type
------------ | -------------
`steps` | Array&lt;any&gt;
`errors` | [Array&lt;SweepError&gt;](SweepError.md)

## Example

```typescript
import type { SweepCollectionResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "steps": null,
  "errors": null,
} satisfies SweepCollectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SweepCollectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# OwnersPaginatedResponse


## Properties

Name | Type
------------ | -------------
`owners` | [Array&lt;Owner&gt;](Owner.md)
`next` | string

## Example

```typescript
import type { OwnersPaginatedResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "owners": null,
  "next": null,
} satisfies OwnersPaginatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OwnersPaginatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



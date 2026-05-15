
# MetadataIngestionError


## Properties

Name | Type
------------ | -------------
`errorType` | string
`message` | string
`url` | string
`statusCode` | number

## Example

```typescript
import type { MetadataIngestionError } from ''

// TODO: Update the object below with actual values
const example = {
  "errorType": null,
  "message": null,
  "url": null,
  "statusCode": null,
} satisfies MetadataIngestionError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MetadataIngestionError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



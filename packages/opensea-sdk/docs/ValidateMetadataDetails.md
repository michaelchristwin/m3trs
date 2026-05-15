
# ValidateMetadataDetails


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`originalImageUrl` | string
`processedImageUrl` | string
`originalAnimationUrl` | string
`processedAnimationUrl` | string
`externalUrl` | string
`backgroundColor` | string
`attributes` | [Array&lt;ValidateMetadataAttribute&gt;](ValidateMetadataAttribute.md)

## Example

```typescript
import type { ValidateMetadataDetails } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "originalImageUrl": null,
  "processedImageUrl": null,
  "originalAnimationUrl": null,
  "processedAnimationUrl": null,
  "externalUrl": null,
  "backgroundColor": null,
  "attributes": null,
} satisfies ValidateMetadataDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidateMetadataDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



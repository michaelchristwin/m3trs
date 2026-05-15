
# AssetMetadataResponse


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`image` | string
`externalLink` | string
`animationUrl` | string
`traits` | [Array&lt;Trait&gt;](Trait.md)

## Example

```typescript
import type { AssetMetadataResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "image": null,
  "externalLink": null,
  "animationUrl": null,
  "traits": null,
} satisfies AssetMetadataResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetMetadataResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



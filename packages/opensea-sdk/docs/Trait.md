
# Trait


## Properties

Name | Type
------------ | -------------
`traitType` | string
`displayType` | string
`maxValue` | string
`value` | any

## Example

```typescript
import type { Trait } from ''

// TODO: Update the object below with actual values
const example = {
  "traitType": null,
  "displayType": null,
  "maxValue": null,
  "value": null,
} satisfies Trait

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Trait
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# ConsiderationItem


## Properties

Name | Type
------------ | -------------
`itemType` | number
`token` | string
`identifierOrCriteria` | string
`startAmount` | string
`endAmount` | string
`recipient` | string

## Example

```typescript
import type { ConsiderationItem } from ''

// TODO: Update the object below with actual values
const example = {
  "itemType": null,
  "token": null,
  "identifierOrCriteria": null,
  "startAmount": null,
  "endAmount": null,
  "recipient": null,
} satisfies ConsiderationItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConsiderationItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



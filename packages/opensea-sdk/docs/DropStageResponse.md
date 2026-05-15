
# DropStageResponse

A mint stage within a drop

## Properties

Name | Type
------------ | -------------
`uuid` | string
`stageType` | string
`label` | string
`price` | string
`priceCurrencyAddress` | string
`startTime` | string
`endTime` | string
`maxPerWallet` | string

## Example

```typescript
import type { DropStageResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "uuid": null,
  "stageType": public_sale,
  "label": null,
  "price": null,
  "priceCurrencyAddress": null,
  "startTime": null,
  "endTime": null,
  "maxPerWallet": null,
} satisfies DropStageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DropStageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



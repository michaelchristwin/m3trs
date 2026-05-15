
# PaymentToken


## Properties

Name | Type
------------ | -------------
`symbol` | string
`address` | string
`chain` | string
`image` | string
`name` | string
`decimals` | number
`ethPrice` | string
`usdPrice` | string

## Example

```typescript
import type { PaymentToken } from ''

// TODO: Update the object below with actual values
const example = {
  "symbol": null,
  "address": null,
  "chain": null,
  "image": null,
  "name": null,
  "decimals": null,
  "ethPrice": null,
  "usdPrice": null,
} satisfies PaymentToken

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentToken
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



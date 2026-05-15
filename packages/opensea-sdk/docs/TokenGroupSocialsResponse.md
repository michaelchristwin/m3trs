
# TokenGroupSocialsResponse

Social media links for a token group

## Properties

Name | Type
------------ | -------------
`website` | string
`twitter` | string
`discord` | string
`telegram` | string
`coinmarketcap` | string
`coingecko` | string

## Example

```typescript
import type { TokenGroupSocialsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "website": null,
  "twitter": null,
  "discord": null,
  "telegram": null,
  "coinmarketcap": null,
  "coingecko": null,
} satisfies TokenGroupSocialsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenGroupSocialsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



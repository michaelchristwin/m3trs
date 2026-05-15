
# TokenGroupResponse

A token group representing equivalent currencies across different blockchains

## Properties

Name | Type
------------ | -------------
`slug` | string
`displayName` | string
`symbol` | string
`description` | string
`imageUrl` | string
`openseaUrl` | string
`currencies` | [Array&lt;TokenGroupCurrencyResponse&gt;](TokenGroupCurrencyResponse.md)
`primaryCurrency` | [TokenGroupCurrencyResponse](TokenGroupCurrencyResponse.md)
`stats` | [TokenGroupStatsResponse](TokenGroupStatsResponse.md)
`socials` | [TokenGroupSocialsResponse](TokenGroupSocialsResponse.md)
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { TokenGroupResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "slug": eth,
  "displayName": Ethereum,
  "symbol": ETH,
  "description": null,
  "imageUrl": null,
  "openseaUrl": null,
  "currencies": null,
  "primaryCurrency": null,
  "stats": null,
  "socials": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies TokenGroupResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TokenGroupResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# ProfileCollectionResponse


## Properties

Name | Type
------------ | -------------
`collection` | string
`name` | string
`description` | string
`imageUrl` | string
`bannerImageUrl` | string
`owner` | string
`safelistStatus` | string
`category` | string
`isDisabled` | boolean
`isNsfw` | boolean
`traitOffersEnabled` | boolean
`collectionOffersEnabled` | boolean
`openseaUrl` | string
`projectUrl` | string
`wikiUrl` | string
`discordUrl` | string
`telegramUrl` | string
`twitterUsername` | string
`instagramUsername` | string
`contracts` | [Array&lt;Contract&gt;](Contract.md)
`itemCount` | number
`totalQuantity` | number
`usdValue` | number

## Example

```typescript
import type { ProfileCollectionResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "collection": null,
  "name": null,
  "description": null,
  "imageUrl": null,
  "bannerImageUrl": null,
  "owner": null,
  "safelistStatus": null,
  "category": null,
  "isDisabled": null,
  "isNsfw": null,
  "traitOffersEnabled": null,
  "collectionOffersEnabled": null,
  "openseaUrl": null,
  "projectUrl": null,
  "wikiUrl": null,
  "discordUrl": null,
  "telegramUrl": null,
  "twitterUsername": null,
  "instagramUsername": null,
  "contracts": null,
  "itemCount": null,
  "totalQuantity": null,
  "usdValue": null,
} satisfies ProfileCollectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProfileCollectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)




# AccountResponse


## Properties

Name | Type
------------ | -------------
`address` | string
`username` | string
`profileImageUrl` | string
`bannerImageUrl` | string
`website` | string
`socialMediaAccounts` | [Array&lt;SocialMediaAccount&gt;](SocialMediaAccount.md)
`bio` | string
`joinedDate` | Date

## Example

```typescript
import type { AccountResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "address": null,
  "username": null,
  "profileImageUrl": null,
  "bannerImageUrl": null,
  "website": null,
  "socialMediaAccounts": null,
  "bio": null,
  "joinedDate": null,
} satisfies AccountResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



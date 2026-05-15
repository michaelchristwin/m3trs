
# InstantApiKeyResponse

Instant API key response

## Properties

Name | Type
------------ | -------------
`apiKey` | string
`name` | string
`expiresAt` | Date
`rateLimits` | [RateLimitsResponse](RateLimitsResponse.md)
`upgradeUrl` | string

## Example

```typescript
import type { InstantApiKeyResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "apiKey": null,
  "name": null,
  "expiresAt": null,
  "rateLimits": null,
  "upgradeUrl": null,
} satisfies InstantApiKeyResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InstantApiKeyResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



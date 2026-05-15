
# RateLimitsResponse

Rate limits for the API key

## Properties

Name | Type
------------ | -------------
`read` | string
`write` | string
`fulfillment` | string

## Example

```typescript
import type { RateLimitsResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "read": 60/m,
  "write": 5/m,
  "fulfillment": 5/m,
} satisfies RateLimitsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RateLimitsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



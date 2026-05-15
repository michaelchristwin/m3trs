
# Criteria


## Properties

Name | Type
------------ | -------------
`collection` | [CollectionInner](CollectionInner.md)
`contract` | [ContractInner](ContractInner.md)
`traits` | [Array&lt;TraitData&gt;](TraitData.md)
`numericTraits` | [Array&lt;NumericTraitData&gt;](NumericTraitData.md)
`encodedTokenIds` | string

## Example

```typescript
import type { Criteria } from ''

// TODO: Update the object below with actual values
const example = {
  "collection": null,
  "contract": null,
  "traits": null,
  "numericTraits": null,
  "encodedTokenIds": null,
} satisfies Criteria

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Criteria
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



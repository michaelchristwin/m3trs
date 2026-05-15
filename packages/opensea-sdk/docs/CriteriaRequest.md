
# CriteriaRequest

Criteria for collection or trait offers. When traits are specified, the offer targets NFTs matching those traits. For supported collections, the identifierOrCriteria (merkle root) will be \'0\' and trait matching is validated server-side at fulfillment time.

## Properties

Name | Type
------------ | -------------
`collection` | [CollectionCriteria](CollectionCriteria.md)
`contract` | [ContractCriteria](ContractCriteria.md)
`trait` | [TraitCriteria](TraitCriteria.md)
`traits` | [Array&lt;TraitCriteria&gt;](TraitCriteria.md)
`numericTraits` | [Array&lt;NumericTraitCriteria&gt;](NumericTraitCriteria.md)

## Example

```typescript
import type { CriteriaRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "collection": null,
  "contract": null,
  "trait": null,
  "traits": null,
  "numericTraits": null,
} satisfies CriteriaRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CriteriaRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



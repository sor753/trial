
# Family

A Family

## Properties

Name | Type
------------ | -------------
`reference` | string
`relationship` | string
`name` | string
`birthDate` | Date
`job` | [FamilyJob](FamilyJob.md)
`have` | [Array&lt;FamilyHaveInner&gt;](FamilyHaveInner.md)

## Example

```typescript
import type { Family } from ''

// TODO: Update the object below with actual values
const example = {
  "reference": null,
  "relationship": null,
  "name": null,
  "birthDate": null,
  "job": null,
  "have": null,
} satisfies Family

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Family
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



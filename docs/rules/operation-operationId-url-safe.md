# operation-operationId-url-safe

Requires the `operationId` value to be URL safe.

|OAS|Compatibility|
|---|---|
|2.0|✅|
|3.0|✅|
|3.1|✅|

## API design principles

The `operationId` is used by tooling to identify operations (which are otherwise done through scary looking JSON pointers).
Some tooling may use it in a URL path.
This rule makes it possible to use the `operationId` in URLs without any transformation of the `operationId`.

This rule is unopinionated.
## Configuration

|Option|Type|Description|
|---|---|---|
|severity|string|Possible values: `off`, `warn`, `error`. Default `error` (in `recommended` configuration). |

An example configuration:

```yaml
styleguide:
  rules:
    operation-operationId-url-safe: error
```

## Examples

Given this configuration:

```yaml
styleguide:
  rules:
    operation-operationId-url-safe: error
```

Example of an **incorrect** operation:
```yaml
paths:
  /cars:
    get:
      operationId: Car<>Wash
      # ...
```

Example of a **correct** operation:
```yaml
paths:
  /cars:
    get:
      operationId: CarWash
      # ...
```

## Related rules

- [operation-summary](./operation-summary.md)
- [operation-operationId-unique](./operation-operationId-unique.md)
- [operation-operationId](./operation-operationId.md)
- [assertions](./assertions.md)

## Resources

- [Rule source](https://github.com/Redocly/redocly-cli/blob/master/packages/core/src/rules/common/operation-operationId-url-safe.ts)
- [Operation object docs](https://redocly.com/docs/openapi-visual-reference/operation/)
- Consider using [assertions](./assertions.md) for more specific rules for `operationId`s such as length, casing, and pattern enforcement.

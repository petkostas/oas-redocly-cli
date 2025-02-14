# scalar-property-missing-example

Requires that every scalar property in the API definition has either `example` or `examples`˙ defined.
Scalar properties are any of the following types: `string`, `number`, `null`, `boolean`, `integer`.

|OAS|Compatibility|
|---|---|
|2.0|✅|
|3.0|✅|
|3.1|✅|

## API design principles

One of the main goals of your API definition (and your API documentation) is to help consumers understand how your API behaves and what to expect when working with it.

Providing examples for properties in your API definition not only improves the developer and user experience of working with your APIs, but also makes the documentation more complete. Many API documentation tools are able to automatically extract such example values from the API definition, and let consumers use those values to test the APIs or send (mock) requests to the API directly from the documentation.

## Configuration

To configure the rule, add it to the `lint.rules` section of your configuration file.
Set the desired [severity](/docs/cli/rules.md#severity-settings) for the rule.

```yaml
styleguide:
  rules:
    scalar-property-missing-example:
      severity: error
```

## Configuration


|Option|Type|Description|
|---|---|---|
|severity|string|Possible values: `off`, `warn`, `error`. Default `off` (in `recommended` configuration). |

An example configuration:

```yaml
styleguide:
  rules:
    scalar-property-missing-example: error
```

## Examples


Given this configuration:

```yaml
styleguide:
  rules:
    scalar-property-missing-example: error
```

Example of an **incorrect** schema:

```yaml Bad example
schemas:
  User:
    type: object
    properties:
      email:
        description: User email address
        type: string
        format: email
```

Example of a **correct** schema:


```yaml Good example
schemas:
  User:
    type: object
    properties:
      email:
        description: User email address
        type: string
        format: email
        example: john.smith@example.com
```

## Related rules

- [no-invalid-media-type-examples](./no-invalid-media-type-examples.md)
- [no-invalid-parameter-examples](./no-invalid-parameter-examples.md)
- [no-invalid-schema-examples](./no-invalid-schema-examples.md)
- [assertions](./assertions.md)

## Resources

- [Rule source](https://github.com/Redocly/redocly-cli/blob/master/packages/core/src/rules/common/scalar-property-missing-example.ts)
- [Schema docs](https://redocly.com/docs/openapi-visual-reference/schemas/)

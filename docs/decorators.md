---
redirectFrom:
  - /docs/cli/resources/built-in-decorators/
---
# Decorators

All Redocly CLI decorators are listed on this page.

To learn how to configure decorators, read more about their [configuration syntax](#decorator-configuration-syntax).

Decorators run during the `bundle` command.
They are commonly used to add, remove, or change content.

## List of decorators

### Changing descriptions
- [info-description-override](./decorators/info-description-override.md)
- [operation-description-override](./decorators/operation-description-override.md)
- [tag-description-override](./decorators/tag-description-override.md)

### Removing content

- [filter-in](./decorators/filter-in.md)
- [filter-out](./decorators/filter-out.md)
- [remove-x-internal](./decorators/remove-x-internal.md)

Have an idea for a decorator?
We might build it for you and give it to the world.
Open a [GitHub issue](https://github.com/Redocly/redocly-cli/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=) and let us know.

## Decorator configuration syntax

The following example shows how to configure a decorator in the [Redocly configuration file](./configuration/index.mdx).

```yaml
apis:
  main:
    root: ./openapi/openapi.yaml
    styleguide:
      decorators:
        decorator-name:
          decorator-option: example-value
styleguide:
  decorators:
    decorator-name:
      decorator-option: example-value
```

Optionally, you may specify `severity` as one of decorator options in the configuration. Severity can be set to `error`, `warn` or `off`, similar to how it works with [rules](./rules.md). When it's specified, any problem reported from the decorator is treated according to the configured severity. Setting `severity: off` disables the decorator altogether. Generally, it's not necessary to specify `severity` for decorator configuration except for troubleshooting purposes.

## Custom decorators

You can create your own decorators using [custom plugins](./resources/custom-rules.md).
Read a guide that demonstrates a custom decorator to [replace your server URL](./guides/replace-server-url.md).

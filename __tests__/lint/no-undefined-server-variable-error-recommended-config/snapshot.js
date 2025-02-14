// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint no-undefined-server-variable-error-recommended-config 1`] = `

The apiDefinitions field is deprecated. Use apis instead. Read more about this change: https://redocly.com/docs/api-registry/guides/migration-guide-config-file/#changed-properties
validating /openapi.yaml...
[1] openapi.yaml:7:5 at #/servers/0/url

Expected type \`string\` but got \`null\`.

5 |   description: description
6 | servers:
7 |   - url:
  |     ^^^^
8 |     description: Dev Environment.
9 | paths:

Error was generated by the spec rule.


[2] openapi.yaml:2:1 at #/info

Info object should contain \`license\` field.

1 | openapi: 3.1.0
2 | info:
  | ^^^^
3 |   title: Petstore API
4 |   version: 1.0.0

Warning was generated by the info-license rule.


[3] openapi.yaml:14:7 at #/paths/~1pet~1findByStatus/get/responses

Operation must have at least one \`4xx\` response.

12 | operationId: example
13 | summary: summary example
14 | responses:
   | ^^^^^^^^^
15 |   '200':
16 |     description: example description

Warning was generated by the operation-4xx-response rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error and 2 warnings.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;

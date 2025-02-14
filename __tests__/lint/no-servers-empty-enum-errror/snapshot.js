// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint no-servers-empty-enum-errror 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:5:1 at #/servers

Server variable with \`enum\` must be a non-empty array.

3 |   title: Example OpenAPI 3 definition. Valid.
4 |   version: 1.0
5 | servers:
  | ^^^^^^^
6 |   - url: https://example.com/user/{id}/place/{placeId}
7 |     variables:

Error was generated by the no-servers-empty-enum rule.


[2] openapi.yaml:5:1 at #/servers

Server variable define \`enum\` and \`default\`. \`enum\` must include default value

3 |   title: Example OpenAPI 3 definition. Valid.
4 |   version: 1.0
5 | servers:
  | ^^^^^^^
6 |   - url: https://example.com/user/{id}/place/{placeId}
7 |     variables:

Error was generated by the no-servers-empty-enum rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 2 errors.
run \`openapi lint --generate-ignore-file\` to add all problems to the ignore file.


`;

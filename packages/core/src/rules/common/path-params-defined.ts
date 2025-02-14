import { Oas3Rule, Oas2Rule } from '../../visitors';
import { Oas2Parameter } from '../../typings/swagger';
import { Oas3Parameter } from '../../typings/openapi';
import { UserContext } from '../../walk';

const pathRegex = /\{([a-zA-Z0-9_.-]+)\}+/g;

export const PathParamsDefined: Oas3Rule | Oas2Rule = () => {
  let pathTemplateParams: Set<string>;
  let definedPathParams: Set<string>;
  let currentPath: string;

  return {
    PathItem: {
      enter(_: object, { key }: UserContext) {
        definedPathParams = new Set();
        currentPath = key as string;
        pathTemplateParams = new Set(
          Array.from(key!.toString().matchAll(pathRegex)).map((m) => m[1])
        );
      },
      Parameter(parameter: Oas2Parameter | Oas3Parameter, { report, location }: UserContext) {
        if (parameter.in === 'path' && parameter.name) {
          definedPathParams.add(parameter.name);
          if (!pathTemplateParams.has(parameter.name)) {
            report({
              message: `Path parameter \`${parameter.name}\` is not used in the path \`${currentPath}\`.`,
              location: location.child(['name']),
            });
          }
        }
      },
      Operation: {
        leave(_op: object, { report, location }: UserContext) {
          for (const templateParam of Array.from(pathTemplateParams.keys())) {
            if (!definedPathParams.has(templateParam)) {
              report({
                message: `The operation does not define the path parameter \`{${templateParam}}\` expected by path \`${currentPath}\`.`,
                location: location.child(['parameters']).key(), // report on operation
              });
            }
          }
        },
        Parameter(parameter: Oas2Parameter | Oas3Parameter, { report, location }: UserContext) {
          if (parameter.in === 'path' && parameter.name) {
            definedPathParams.add(parameter.name);
            if (!pathTemplateParams.has(parameter.name)) {
              report({
                message: `Path parameter \`${parameter.name}\` is not used in the path \`${currentPath}\`.`,
                location: location.child(['name']),
              });
            }
          }
        },
      },
    },
  };
};

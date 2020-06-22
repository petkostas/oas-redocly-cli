import { Oas3Rule } from '../../visitors';
import { Location } from '../../ref-utils';

export const NoUnusedComponents: Oas3Rule = () => {
  let components = new Map<string, { used: boolean; location?: Location; name: string }>();

  function registerComponent(location: Location, name: string): void {
    components.set(location.absolutePointer, {
      used: components.get(location.absolutePointer)?.used || false,
      location,
      name,
    });
  }

  return {
    ref(ref, { type, resolve, key }) {
      if (
        ['Schema', 'Header', 'Parameter', 'Response', 'Example', 'RequestBody'].includes(type.name)
      ) {
        const resolvedRef = resolve(ref);
        if (!resolvedRef.location) return;
        components.set(resolvedRef.location.absolutePointer, {
          used: true,
          name: key.toString(),
        });
      }
    },
    DefinitionRoot: {
      leave(_, { report }) {
        components.forEach((usageInfo, absolutePointer) => {
          if (!usageInfo.used) {
            const componentName = absolutePointer.split('/').pop();
            report({
              message: `Component: "${componentName}" is never used.`,
              location: { ...usageInfo.location, reportOnKey: true },
            });
          }
        });
      },
    },
    NamedSchemas: {
      Schema(schema, { location, key }) {
        if (!schema.allOf) {
          // FIXME: find a better way to detect possible discriminator
          registerComponent(location, key.toString());
        }
      },
    },
    NamedParameters: {
      Parameter(_parameter, { location, key }) {
        registerComponent(location, key.toString());
      },
    },
    NamedResponses: {
      Response(_response, { location, key }) {
        registerComponent(location, key.toString());
      },
    },
    NamedExamples: {
      Example(_example, { location, key }) {
        registerComponent(location, key.toString());
      },
    },
    NamedRequestBodies: {
      RequestBody(_requestBody, { location, key }) {
        registerComponent(location, key.toString());
      },
    },
    NamedHeaders: {
      Header(_header, { location, key }) {
        registerComponent(location, key.toString());
      },
    },
  };
};

import {
    Rule,
    SchematicContext,
    Tree,
  } from "@angular-devkit/schematics";


export default function(): Rule {

    return (host: Tree, context: SchematicContext) => {
  
      const version = `3.1.64` // You can get this dynamically from the package.json
  
      context.logger.info(`Applying migration for super-ui-lib to version ${version}`);
  
      return host;
  
    };
  
  }
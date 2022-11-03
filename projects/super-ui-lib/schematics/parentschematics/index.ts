import {
  Rule,
  SchematicContext,
  Tree,
  schematic,
  chain,
  externalSchematic
  //mergeWith,
  //MergeStrategy
} from "@angular-devkit/schematics";
//import { RunSchematicTask } from "@angular-devkit/schematics/tasks";


// src/run-schematics/index.ts

export function parentschematics(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const rule1 = schematic("realdolmen", _options);

    const rule2 = externalSchematic(
      "@schematics/angular",
      "component",
      _options
    );

    return chain([rule1, rule2]);
  };
}





/*import { Rule, SchematicContext, Tree,schematic,chain} from '@angular-devkit/schematics';

//import { RunSchematicTask } from '@angular-devkit/schematics/tasks';

export function parentschematics(_options: any): Rule {
 
      return (_tree: Tree, _context: SchematicContext) => {
        const rule =schematic("super-ui-component",_options);
        const rule2 = schematic("realdolmen",_options)
        return chain([rule,rule2]);
  };
}*/

import {
  Rule,
  SchematicContext,
  Tree,
  externalSchematic
  
} from "@angular-devkit/schematics";
import { RunSchematicTask } from "@angular-devkit/schematics/tasks";


export function masterschematics(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const rule = externalSchematic(
      "@schematics/angular",
      "application",
      _options
    );
   
    _context.addTask(new RunSchematicTask("automatische-schematic", _options));

    return rule;
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

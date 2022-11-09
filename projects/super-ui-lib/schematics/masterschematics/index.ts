import {
  Rule,
  SchematicContext,
  Tree,
  schematic,
  
} from "@angular-devkit/schematics";
import { RunSchematicTask } from "@angular-devkit/schematics/tasks";


export function masterschematics(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
   const rule = schematic("childSchematic", _options)
   
    _context.addTask(new RunSchematicTask("realdolmen", _options));

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

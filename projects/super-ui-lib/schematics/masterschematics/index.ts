import {
  Rule,
  SchematicContext,
  Tree,
  schematic,
  chain
  
} from "@angular-devkit/schematics";
import { AppSchema } from "./schema";

export function masterschematics(_options: AppSchema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {


    const rule1 = schematic("automatische-schematic", _options);
    const rule2 = schematic("api-schematics", _options)
    const rules = [rule1,rule2]
    if(_options.app === "fakestore") { 
      return chain([rule1])
    }
if(_options.app === "Shop-App"){
  return chain([rule2])
}
else
    return chain(rules);
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

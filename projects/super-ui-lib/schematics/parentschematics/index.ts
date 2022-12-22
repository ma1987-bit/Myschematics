
import { Rule, SchematicContext, Tree,schematic,chain} from '@angular-devkit/schematics';

//import { RunSchematicTask } from '@angular-devkit/schematics/tasks';

export function parentschematics(_options: any): Rule {
 
      return (_tree: Tree, _context: SchematicContext) => {
       const rule1 = schematic('masterschematics', _options);
    const rule2 = schematic('defaultapp', _options);
  
  
    const rules = [rule1, rule2];
    if (_options.app === 'predefined') {
      return chain([rule1]);
    }
    if (_options.app === 'defaultApp') {
      return chain([rule2]);
    } 
    else return chain(rules);
  };
}

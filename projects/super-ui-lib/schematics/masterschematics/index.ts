import {
  Rule,
  SchematicContext,
  Tree,
  schematic,
  chain
  
} from '@angular-devkit/schematics';
import { AppSchema } from './schema';

export function masterschematics(_options: AppSchema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const rule1 = schematic('shop-schematic', _options);
    const rule2 = schematic('fakestore-api-schematics', _options);
   const rule3 = schematic('defaultapp', _options);
  
    const rules = [rule1, rule2,rule3];
    if (_options.app === 'Shop-App') {
      return chain([rule1]);
    }
    if (_options.app === 'fakestore') {
      return chain([rule2]);
    } 
    else return chain(rules);
  };
}


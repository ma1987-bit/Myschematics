
// src/child-schematic/index.ts

import { Rule, SchematicContext, Tree,externalSchematic} from '@angular-devkit/schematics';
import { childschemaOptions } from './schema';



// src/run-schematics/index.ts

export function childSchematic(_options: childschemaOptions): Rule {
  return (_tree: Tree, _context: SchematicContext) => {

    const rule = externalSchematic(
      "@schematics/angular",
      "application",
     _options
    );
    
    return rule;
  };
}
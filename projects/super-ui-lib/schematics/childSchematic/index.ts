
// src/child-schematic/index.ts

import { Rule, SchematicContext, Tree,externalSchematic } from '@angular-devkit/schematics';

// src/run-schematics/index.ts

export function childSchematic(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const rule = externalSchematic(
      "@schematics/angular",
      "application",
      _options
    );

    return rule;
  };
}
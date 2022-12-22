import {
  externalSchematic,
  Rule,
  SchematicContext,
  Tree,
} from "@angular-devkit/schematics";
import { Schema } from "./schema";

export function DefaultApp(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const rule = externalSchematic(
      "@schematics/angular",
      "application",
      _options
      
    );

    
    return rule;
  };
}
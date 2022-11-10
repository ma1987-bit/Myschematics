import {
  Rule,
  SchematicContext,
  Tree,
  //schematic,
  //chain,
  //externalSchematic
  //mergeWith,
  //MergeStrategy
} from "@angular-devkit/schematics";
import { RunSchematicTask } from "@angular-devkit/schematics/tasks";
//import { schemaType } from "./schema";



// src/run-schematics/index.ts

export function parentschematics(_options:any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
  
    const realdolmenTask = new RunSchematicTask('realdolmen',_options);
    const ApllicationTask = new RunSchematicTask('childSchematic',_options)

   /* const ApplicationTaskID = _context.addTask(ApllicationTask);
    _context.addTask(realdolmenTask,[ApplicationTaskID])*/
    _context.addTask(realdolmenTask);
    _context.addTask(ApllicationTask)
    return _tree;
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

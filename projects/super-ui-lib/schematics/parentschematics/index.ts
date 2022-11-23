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
import { parentschemaoption } from "./schema";

//import { schemaType } from "./schema";



// src/run-schematics/index.ts

export function parentschematics(_options:parentschemaoption): Rule {

  return (_tree: Tree, _context: SchematicContext) => {


  // ik heb realdolmen schematics meerder geïnitialiseerd want met loops niet gelukt
  const realdolmenTask = new RunSchematicTask('realdolmen',_options);
  //const realdolmenTask1 = new RunSchematicTask('realdolmen',_options);
  //const realdolmenTask2 = new RunSchematicTask('realdolmen',_options);
    // deze child component die applicatie gaat genereren en wordt eerst uitgevoered
    const ApllicationTask = new RunSchematicTask('childSchematic',_options)

   /* const ApplicationTaskID = _context.addTask(ApllicationTask);
   // als je op deze manier doet dan realdolmenTask depend op applicationTaskID dus deze wacht tot de applicatoin uitgevoered 
    _context.addTask(realdolmenTask,[ApplicationTaskID])*/
   
    //_context.addTask(realdolmenTask1);
    //_context.addTask(realdolmenTask2);
 
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

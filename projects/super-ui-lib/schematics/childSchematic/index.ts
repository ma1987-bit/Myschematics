
import {
SchematicsException,
} from '@angular-devkit/schematics';
import * as JSON5 from 'json5';
import { getWorkspace } from '@schematics/angular/utility/workspace';
import { capitalize } from '@angular-devkit/core/src/utils/strings';


import { addModuleImportToModule } from '@angular/cdk/schematics';

import { Rule,Tree,externalSchematic} from '@angular-devkit/schematics';
import { Schema as MyServiceSchema } from './schema';
import { MuiFile } from './model';

export function childSchematic(options: MyServiceSchema): Rule {
  return async (host: Tree) => {
    const workspace = await getWorkspace(host);
    if (!options.project) {
      options.project = workspace.projects.keys().next().value;
    }
    const project = workspace.projects.get(options.project);
    const appPath = `${project?.sourceRoot}/app`;

    const modelFile = `${appPath}/${options.name}/${options.model}`;
    const modelBuffer = host.read(modelFile);

    if (modelBuffer === null) {
      throw new SchematicsException(`Model file ${options.name} does not exist.`);
    }

    const modelJson = modelBuffer.toString('utf-8');
    const model = JSON5.parse(modelJson) as MuiFile;
    
    addModuleImportToModule(host,
      `${appPath}/app.module.ts`,
      `${capitalize(model.name)}`,
      `./${options.name}/${model.name}.component`);

    const rule = externalSchematic(
      "@angular/material",
      "navigation",
      options,
    );
    
    return rule;
  };
}
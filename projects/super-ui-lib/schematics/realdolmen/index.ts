import {
  Rule,
  url,
  mergeWith,
  apply,
  applyTemplates,
  move,
  chain,
  MergeStrategy,
} from '@angular-devkit/schematics';
import { ComponentOptions } from './schema';
import { strings, normalize } from '@angular-devkit/core';
export function realdolmen(options: ComponentOptions): Rule {
  return () => {

    // hier create the template that comes from the files folder under this schematics 
    const templateSource = apply(url(`./files/${options.type}`), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.type,
      }),
      
// the template will move to this path and it will take us name the name of type example(header,footer,card)
      move(normalize(`/${options.path}/${strings.dasherize(options.type)}`)),
    ]);
// hier it will overwrite the above template the files
    return chain([mergeWith(templateSource, MergeStrategy.Overwrite)]);
  };
}

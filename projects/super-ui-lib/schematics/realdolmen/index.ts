import { Rule,url,mergeWith,apply,applyTemplates,move, chain, MergeStrategy } from '@angular-devkit/schematics';
import { ComponentOptions } from './schema';
import {strings,normalize} from '@angular-devkit/core'


export function realdolmen(options:ComponentOptions):Rule{

 return()=>{
const templateSource = apply(
            
url(`./files/${options.type}`),[
applyTemplates({
    classify: strings.classify,
    dasherize: strings.dasherize,
   name : options.type
}),

move(normalize(`/${options.path}/${strings.dasherize(options.type)}`))
 ]
 )
 
  return chain([mergeWith(templateSource, MergeStrategy.Overwrite)]);
}
}

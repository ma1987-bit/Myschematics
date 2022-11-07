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
    name : options.name
}),
move(normalize(`/${options.path}/${strings.dasherize(options.name)}`))
            ]
        )
    
   /* return chain([
       
        externalSchematic(
'@angular/material:navigation','navigation',options),
mergeWith(templateSource,MergeStrategy.Overwrite)] 

 )*/
 
 return chain([mergeWith(templateSource, MergeStrategy.Overwrite)]);

}
}

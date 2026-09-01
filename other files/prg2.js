import {mkdir,rm} from 'fs/promises'
//await mkdir('uploads')
//await mkdir('uploads/images')
//await mkdir("docs/resume/data",{recursive:true})//by this we can create recursive folders
await rm("docs",{recursive:true});//removes only data folder
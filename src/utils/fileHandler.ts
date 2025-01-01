import { readdirSync, statSync } from 'fs';
import { join } from 'path';


export function readFiles(directory: string):string[]{
  const files: string[] = [];
  const stack: string[] = [directory];

  while(stack.length>0){
    const currentDir = stack.pop() as string
    try{
      const dirFiles = readdirSync(currentDir);
      dirFiles.forEach(file=>{
        const path = join(currentDir, file );
        if(statSync(path).isDirectory()){
          stack.push(path);

        }
        else if(file.endsWith('.ts')){
          files.push(path);
        }
      })
    }
    catch(err){
      console.error(`Failed to process ${currentDir}`, err);
    }
  }

  return files;
}
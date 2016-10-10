#!/usr/bin/env babel-node

require('./helper')

var myArgs = process.argv.slice(2);
let fs = require('fs').promise
let path = require('path')
let parent_dir = true;

async function rm(rootPath) {
    let stat = fs.stat(rootPath)
    let check = await stat

    if(check.isFile(rootPath)){
      fs.unlink(rootPath);
    } else {
      if(check.isDirectory(rootPath)){
        console.log("is a directory")
        // unlink all files in the directory
        let promise = fs.readdir(rootPath)
        let fileNames = await promise

        for(let value of fileNames) {
          let filePath = path.join(rootPath, value)
          let stat = fs.stat(filePath)
          let check = await stat

          if ( check.isFile(filePath) ) {
            fs.unlink(filePath)
          } else {
              await rm(filePath);
          } // 
        } 
        fs.rmdir(rootPath)
      } 
    }
}

async function main() {
  await rm(myArgs[0])
}

main()
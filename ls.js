#!/usr/bin/env babel-node

require('./helper')

var myArgs = process.argv.slice(2);
let fs = require('fs').promise
let path = require('path')
let parent_dir = true;

async function ls(rootPath) {
    let promise = fs.readdir(rootPath)
    let fileNames = await promise

    for(let value of fileNames) {
        let filePath = path.join(rootPath, value)
        
        let stat = fs.stat(filePath)
        let check = await stat

        if ( parent_dir == true && check.isFile(filePath) ) {
          console.log(filePath)
        } else {
            console.log(filePath)
            if(myArgs[1] == '-R'){
              let parent_dir = false;
              await ls(filePath);
          }
        }
    }
}

async function main() {
  await ls(myArgs[0])
}

main()
#!/usr/bin/env babel-node

require('./helper')
let path = require('path')
let fs = require('fs').promise

var myArgs = process.argv.slice(2);

async function touch() {

	//let promise = await fs.readdir(__dirname)

	//let filePath = path.join(__dirname, myArgs[0])

 	await fs.open(myArgs[0], 'a')
 	await fs.utimes(myArgs[0],new Date(),new Date())
}

async function main() {
  await touch()
}

main()
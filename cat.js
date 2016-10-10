#!/usr/bin/env babel-node

require('./helper')
let path = require('path')
let fs = require('fs').promise

var myArgs = process.argv.slice(2);

async function cat() {
	let data =  await fs.readFile(myArgs[0], 'utf8')
	console.log(data)
}

async function main() {
  await cat()
}

main()
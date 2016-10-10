#!/usr/bin/env babel-node

require('./helper')

var myArgs = process.argv.slice(2);

async function echo() {
	process.stdout.write(myArgs[0])
	process.stdout.write('\n')
}

async function main() {
  await echo() 
}

main()
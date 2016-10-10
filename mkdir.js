#!/usr/bin/env babel-node
require('./helper')

let fs = require('fs').promise
let myArgs = process.argv.slice(2);

async function mkdir() {
  let path = myArgs[0]
  await fs.mkdir(path)
}

mkdir()
#!/usr/bin/env node

const { initGaiaNode } = require('../index');
const yargs = require('yargs');

const argv = yargs
  .option('model', {
    alias: 'm',
    description: 'URL to the model configuration JSON',
    type: 'string',
    default: 'https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/llama-3.2-1b-instruct/config.json'
  })
  .help()
  .alias('help', 'h')
  .argv;

initGaiaNode(argv.model);
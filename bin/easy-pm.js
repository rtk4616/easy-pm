#!/usr/bin/env node
const program = require('commander')
const easyPm = require('../')

program
	.version(info.version)
	.command('start <path>')
	.action(path => easyPm.start(path))

program.parse(process.argv)
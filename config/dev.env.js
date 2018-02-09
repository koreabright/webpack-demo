'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
	entry: {
		app: '../src/main.js'
	},
	output: {
		filename: 'bundle.js',
		path: '../web'
	}
}

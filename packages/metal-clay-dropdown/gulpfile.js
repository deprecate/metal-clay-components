'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'metal-clay-dropdown.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'metal-clay-dropdown',
		soyDeps: ['node_modules/*clay*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);

'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'metal-quartz-dropdown.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'metal-quartz-dropdown',
		soyDeps: ['node_modules/*quartz*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);

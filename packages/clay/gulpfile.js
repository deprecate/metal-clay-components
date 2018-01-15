var inquirer = require('inquirer');
var path = require('path');

var gulp = require('gulp-help')(require('gulp'));
var liferayGulpTasks = require('liferay-gulp-tasks');
var plugins = require('gulp-load-plugins')({pattern: ['autoprefixer', 'gulp-*', 'gulp.*', 'merge-stream', 'postcss-*']});
var runSequence = require('run-sequence');

var chalk = require('chalk');

var _ = require('./lib/lodash_utils');

var BOOTSTRAP_JS_FILE = path.join('src', 'js', 'bootstrap.js');

var BOOTSTRAP_JS_DIR = path.dirname(BOOTSTRAP_JS_FILE);

var BOOTSTRAP_VAR_FILE = path.join('src','scss', 'bootstrap', '_variables.scss');

var BOOTSTRAP_VAR_DIR = path.dirname(BOOTSTRAP_VAR_FILE);

var POPPER_JS_FILE = path.join('src', 'js', 'popper.js');

var config = {
	AUTOPREFIXER: {
		cascade: false,
		browsers: ['last 2 versions'],
		remove: false
	},
	BOOTSTRAP_JS_FILE: BOOTSTRAP_JS_FILE,
	BOOTSTRAP_JS_DIR: BOOTSTRAP_JS_DIR,
	BOOTSTRAP_VAR_FILE: BOOTSTRAP_VAR_FILE,
	BOOTSTRAP_VAR_DIR: BOOTSTRAP_VAR_DIR,
	SRC_GLOB: 'src/**/*',
	POPPER_JS_FILE: POPPER_JS_FILE
};

var tasks = require('require-dir')('./tasks');

liferayGulpTasks(gulp, {
	artifactSrc: ['**/release/**/*', '!node_modules/', '!node_modules/**'],
	artifactName: 'clay'
});

_.invoke(tasks, 'call', tasks, gulp, plugins, _, config);

gulp.task('default', ['build']);

gulp.task('build', function(cb) {
	runSequence(
		'build:patch-bootstrap',
		'build:svg',
		'build:svg:scss-icons',
		'build:metalsmith',
		'build:rtl',
		'build:clean-bootstrap-patch',
		function(err) {
			gulp.emit('build:finished', err);

			cb(err);
		}
	);
});

gulp.task('serve', ['serve:start', 'watch']);

gulp.task(
	'release:files',
	function(cb) {
		runSequence(
			'build:patch-bootstrap',
			'release:clean',
			'release:build',
			'release:svg',
			'release:zip',
			'build:clean-bootstrap-patch',
			cb
		);
	}
);

gulp.task(
	'release:npm',
	function(cb) {
		runSequence(
			'build:patch-bootstrap',
			'release:npm-clean',
			'release:npm-build-files',
			'release:npm-src-files',
			'release:npm-index',
			'release:npm-package',
			'release:npm-publish',
			'build:clean-bootstrap-patch',
			cb
		);
	}
);

gulp.task(
	'release',
	function(cb) {
		var questions = [
			{
				default: false,
				message: 'Do you want to create a git tag and push to gh-pages?',
				name: 'publish',
				type: 'confirm'
			},
			{
				default: false,
				message: 'Do you want to push to the Maven repo and publish to npm?',
				name: 'packageManagers',
				type: 'confirm',
				when: function(answers) {
					return answers.publish;
				}
			}
		];

		runSequence(
			'release:files',
			function() {
				inquirer.prompt(
					questions,
					function(answers) {
						if (answers.publish) {
							var args = [
								'release:git',
								'release:publish',
								cb
							];

							if (answers.packageManagers) {
								args.splice(2, 0, 'maven-publish');
								args.splice(3, 0, 'release:npm');
							}

							runSequence.apply(null, args);
						}
						else {
							cb();
						}
					}
				);
			}
		);
	}
);
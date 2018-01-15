var argv = require('minimist')(process.argv.slice(2));
var cmdPromise = require('../lib/cmd_promise');
var fs = require('fs-extra');
var packageJSONUtil = require('../lib/package_json_util');
var path = require('path');
var semver = require('semver');
var updateVersion = require('../lib/update_version');

module.exports = function(gulp, plugins, _, config) {
	var REGEX_SCSS = /^scss(\/|$)/;

	var license = require('./copyright_banner');

	var GIT_REMOTE;

	var TEMP_PATH = path.join(process.cwd(), 'temp');

	var getGitRemote = function() {
		if (!GIT_REMOTE) {
			GIT_REMOTE = cmdPromise.resolve()
			.git('remote', '-v').then(function(response) {
				var remotes = response.stdout;

				var remote = 'origin';

				if ((/^upstream(?:\s+)/m).test(remotes)) {
					remote = 'upstream';
				}

				return remote;
			});
		}

		return GIT_REMOTE;
	};

	var currentVersion = require('../package.json').version;

	var releaseType = (function() {
		var types = ['major', 'minor', 'patch', 'premajor', 'prerelease'];

		var type = _.find(
			types,
			function(item, index) {
				return argv[item];
			}
		);

		if (!type) {
			type = 'patch';
		}

		return type;
	}());

	var prereleaseIdentifier = (function() {
		var types = ['alpha', 'beta'];

		var type = _.find(
			types,
			function(item, index) {
				return argv[item];
			}
		);

		return type;
	}());

	var bumpedVersion = semver.inc(currentVersion, releaseType, prereleaseIdentifier);

	gulp.task(
		'release:clean',
		function() {
			return gulp.src('./release')
			// .pipe(plugins.debug())
			.pipe(plugins.clean({read: false}));
		}
	);

	gulp.task(
		'release:svg',
		require('../lib/svgstore')(gulp, plugins, _, {dest: './release/images/icons'})
	);

	gulp.task(
		'release:build',
		function() {
			var REGEX_ALLOW = /\.((s)?css|js)/;
			var REGEX_DISALLOW = /\/bootstrap\//;

			var assetFilter = plugins.filter(
				function(file) {
					var filePath = file.path;

					return REGEX_ALLOW.test(filePath) && !(REGEX_DISALLOW.test(filePath));
				}
			);

			license.metadata.version = bumpedVersion;

			return gulp.src([
				'src/fonts/**/*',
				'src/images/icons/*',
				'src/scss/+(atlas|bootstrap|components|functions|mixins|variables)/**/*',
				'src/scss/+(_components|_mixins|_variables|atlas-variables|atlas|base-variables|base|bootstrap).scss',
				'src/js/{,bootstrap/}*.js'
				], {base: './src'})
			.pipe(assetFilter)
			.pipe(plugins.header(license.tpl, license.metadata))
			// .pipe(plugins.debug())
			.pipe(assetFilter.restore())
			.pipe(gulp.dest('./release'));
		}
	);

	gulp.task(
		'release:zip',
		function() {
			var pkg = require('../package.json');

			return gulp.src('release/**/*')
			.pipe(plugins.zip(pkg.name + '-' + pkg.version + '.zip'))
			.pipe(gulp.dest('.'));
		}
	);

	gulp.task(
		'release:git',
		function(done) {
			var branchName = 'bower-staging-' + Math.random().toString(16).replace(/[^0-9a-fA-F]/g, '');
			var browserCommitMessage = 'Browser files for v' + bumpedVersion;
			var mergeCommitMessage = 'Merging master@v' + bumpedVersion + ' into develop';
			var rebuildCommitMessage = 'Rebuild v' + bumpedVersion;
			var releaseCommitMessage = 'Release v' + bumpedVersion;
			var tagMessage = 'Version ' + bumpedVersion;
			var previousTagName = 'v' + currentVersion;
			var tagName = 'v' + bumpedVersion;

			var checkStatus = function(msg) {
				return function(status) {
					if (!!status.stdout) {
						throw new Error(msg);
					}
				};
			};

			cmdPromise.resolve()
				.git('checkout', 'develop')
				.cmd('gulp', 'build:svg:scss-icons')
				.git('status', '--porcelain', './src/scss/lexicon-base/functions/_global-functions.scss').then(checkStatus('It appears that there are new icons. Please commit the modified Sass functions file.'))
				.git('checkout', 'master')
				.git('status', '--porcelain').then(checkStatus('working directory not clean, aborting'))
				.then(getGitRemote)
				.then(function(remote) {
					return cmdPromise.resolve().git('fetch', remote, '--quiet');
				})
				.git('tag', '--list', tagName).then(function(tag) {
					if (!!tag.stdout) {
						throw new Error('The tag ' + tagName + ' already exists. Type git tag -d ' + tagName + ' to remove it');
					}
				})
				.git('rev-list', '--count', '--left-only', '@{u}...master').then(function(revCount) {
					if (revCount.stdout !== '0') {
						throw new Error('branch is not up to date, aborting');
					}

					updateVersion(bumpedVersion);

					return bumpedVersion;
				})
				.git('log', previousTagName + '...HEAD', '-n', '1', '--', 'CHANGELOG.md').then(function(log) {
					if (!log.stdout && !argv.f) {
						throw new Error('There are no commits for the CHANGELOG. If this is intentional, re-run this command with -f');
					}

					return log.stdout;
				})
				.git('add', 'package.json')
				.git('commit', '-a', '-m', releaseCommitMessage)
				.cmd('gulp', 'build')
				.git('add', '.')
				.git('commit', '-m', rebuildCommitMessage)
				.git('checkout', '-b', branchName)
				.git('add', '--force', 'release')
				.git('commit', '-a', '-m', browserCommitMessage)
				.git('tag', '-a', tagName, '-m', tagMessage)
				.git('checkout', 'master')
				.git('branch', '-D', branchName)
				.git('checkout', tagName, '--', 'release')
				.git('reset')
				.git('checkout', 'develop')
				.git('merge', 'master', '-m', mergeCommitMessage)
				.then(function() {
					done();
				});
		}
	);

	gulp.task(
		'release:publish',
		function(done) {
			cmdPromise.resolve()
				.then(getGitRemote)
				.then(function(remote){
					return cmdPromise.resolve().git('push', remote, '--tags', 'master', 'develop');
				})
				.then(function() {
					done();
				});
		}
	);

	gulp.task(
		'release:npm-build-files',
		function(done) {
			return gulp.src(
				[
					'build/{fonts,js,css,images/icons}/**/*',
					'!build/js/site{,/**}',
					'!build/css/main.css{,.map}'
				]
			)
			.pipe(gulp.dest('temp/clay/build'));
		}
	);

	gulp.task(
		'release:npm-clean',
		function(done) {
			return gulp.src('./temp')
				.pipe(plugins.clean({
					read: false
				}));
		}
	);

	gulp.task(
		'release:npm-index',
		function(done) {
			return gulp.src(['./index.js', './{README,CHANGELOG}.md'])
				.pipe(gulp.dest('temp/clay'));
		}
	);

	gulp.task(
		'release:npm-package',
		function() {
			var version = packageJSONUtil.getVersion();

			var clayPkg = packageJSONUtil.generate('clay', version);

			fs.writeFileSync(path.join(TEMP_PATH, 'clay', 'package.json'), clayPkg);
		}
	);

	gulp.task(
		'release:npm-publish',
		function(done) {
			var clayPath = path.join(TEMP_PATH, 'clay');

			cmdPromise.resolve()
				.npm('publish', clayPath)
				.then(function() {
					done();
				});
		}
	);

	gulp.task(
		'release:npm-src-files',
		function(done) {
			return gulp.src(
				[
					'src/{fonts,js,scss,images/icons}/**/*',
					'!src/js/site{,/**}',
					'!src/scss/{_site,main}.scss',
					'!src/scss/highlightjs{,/**/*}'
				]
			)
			.pipe(gulp.dest('temp/clay/src'));
		}
	);
};
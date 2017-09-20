import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import { exec } from './axe-driver';

const argv = yargs
	.usage('Usage: $0 [options]')
	.example('$0 --content demo/index.html', 'Executes the accessibility tests')
	.example(
		'$0 --c demo/index.html -r /var/www/',
		'Executes the accessibility tests',
	)
	.nargs('content', 1)
	.describe('content', 'relative URL where the testable content can be found')
	.nargs('root', 1)
	.describe('root', 'Specifies the document root of the test server')
	.help('h')
	.version()
	.alias('h', 'help')
	.alias('v', 'version')
	.alias('r', 'root')
	.alias('c', 'content').argv;

const appDirectory = fs.realpathSync(process.cwd());
const indexHtml = argv.content || 'demos/index.html';
const serverPath = path.resolve(argv.root || appDirectory);

exec({
	indexHtml,
	serverPath,
});

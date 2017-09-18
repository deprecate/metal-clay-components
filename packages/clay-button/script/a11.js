import fs from 'fs';
import path from 'path';
import { exec } from '../../../test/a11/axe';

const appDirectory = fs.realpathSync(process.cwd());

exec({
	indexHtml: 'demos/index.html',
	serverPath: path.resolve(appDirectory),
});

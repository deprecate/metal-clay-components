import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import Server from './helpers/server';
import Driver from './helpers/puppeteerDriver';

const SERVER_PORT = 8899;
const SERVER_PATH = './';
const PATH_TO_AXE = '../../node_modules/axe-core/axe.min.js';
const appDirectory = fs.realpathSync(process.cwd());
const log = console.log;

function resolvePath(relativePath) {
	return path.resolve(appDirectory, relativePath);
}

async function executeAxe(page) {
	await page.injectFile(path.resolve(__dirname, PATH_TO_AXE));
	return await page.evaluate(() => {
		return axe.run();
	});
}

function processAxeReport(axeReport) {
	if (!axeReport || !axeReport.violations) throw 'Invalid Axe Report!';
	if (0 === axeReport.violations.length) {
		happyPath();
	} else {
		sadPath(axeReport);
	}
}

function happyPath() {
	log(chalk.green('No accessibility violation found'));
}

function sadPath(axeReport) {
	const noOfViolations = axeReport.violations.length;
	log(chalk.red(`${noOfViolations} accessibility violations detected`));
	axeReport.violations.forEach((data, idx) => {
		log();
		log();
		log('  ', chalk.red(`${idx + 1}. ${data.description} (${data.id})`));
		log('  ', chalk.grey(data.help));
		log('  ', chalk.underline(data.impact));
		log('  ', chalk.yellow(data.nodes[0].target.join(' ')));

		data.nodes[0].any.map(v => `- ${v.message}`).forEach(v => log('  ', v));

		log('  ', chalk.grey('For detais, see: '), chalk.blue(data.helpUrl));
	});
	// throw the report to force the process to terminate with exit code 1
	throw axeReport;
}

// close our stand-alone server when the web driver terminates
Driver.on('exit', Server.stop);

async function exec({ indexHtml, serverPath }) {
	const serverConfig = await Server.start(
		SERVER_PORT,
		serverPath || resolvePath(SERVER_PATH),
	);
	const page = await Driver.connect(
		`http://localhost:${serverConfig.port}/${indexHtml}`,
	);
	const riport = await executeAxe(page);

	let exitCode = 0;

	try {
		processAxeReport(riport);
	} catch (e) {
		exitCode = 1;
	} finally {
		Driver.exit(exitCode);
	}
}

export { exec };
export default exec;

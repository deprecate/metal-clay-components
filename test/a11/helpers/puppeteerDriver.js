import puppeteer from 'puppeteer';
import Events from 'events';

const emitter = new Events.EventEmitter();

let browser;

const Driver = {
	/**
     * Creates a Puppeteer instance and connects to the given address
     * @param {string} address 
     * @return {Promise} 
     */
	async connect(address) {
		browser = await puppeteer.launch();
		console.log('Puppeteer web driver is launched...');
		const page = await browser.newPage();
		await page.goto(address, { waitUntil: 'networkidle' });
		console.log(`Connected to ${address}`);
		emitter.emit('connect');
		return page;
	},

	/**
     * Closes the Puppeteer session and terminates the main process 
     * with the given exit code
     * @param {integer} code - Exit code
     */
	exit(code) {
		emitter.emit('exit');
		browser.close();
		process.exit(code);
	},

	/**
     * Registers listener to the given event
     * @param {string} event - event ID
     * @param {listener} function - listener function to be registered
     * @return {this}
     */
	on(event, listener) {
		emitter.on(event, listener);
		return this;
	},
};

export { Driver };
export default Driver;

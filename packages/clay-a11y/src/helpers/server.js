import { Promise } from 'es6-promise';
import express from 'express';
let app;
let singleton;

const Server = {
	/**
	 * Starts the express server 
	 * @param {number} port
	 * @param {string} dir
	 * @return {Promise}
	 * @throw {Error}
	 */
	start: function(port, dir) {
		if (app) throw new Error('Server is already running!');

		if (!port) port = 9000;
		if (!dir) dir = './';

		app = express();
		app.use(express.static(dir));
		return new Promise(function(resolve, reject) {
			singleton = app.listen(port, function(err) {
				if (err) reject(err);
				console.log(
					`Server is listening on port ${port} hosting: ${dir}`,
				);
				resolve({ port, dir });
			});
		});
	},

	/**
	 * Stops the server
	 * @return {Promise}
	 */
	stop: function() {
		if (!singleton) return;
		return Promise.resolve().then(() => singleton.close());
	},
};

export { Server };
export default Server;

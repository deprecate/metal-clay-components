import { Promise } from 'es6-promise';
import express from 'express';
let app;
let singleton;

const Server = {
	start: function(port, dir) {
		if (app) throw 'Server is already running!';

		if (!port) port = 9000;
		if (!dir) dir = './';

		app = express();
		app.use(express.static(dir));
		return new Promise(function(resolve, reject) {
			singleton = app.listen(port, function(err) {
				if (err) reject(err);
				console.log(
					`Express application is listening on port ${port} hosting: ${dir}`,
				);
				resolve({ port, dir });
			});
		});
	},

	stop: function() {
		if (!singleton) return;
		return Promise.resolve().then(singleton.close.bind(singleton));
	},
};

export { Server };
export default Server;

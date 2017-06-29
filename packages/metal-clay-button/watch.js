const chokidar = require('chokidar');
const npmRunScript = require('npm-run-script');

console.info('Starting watch mode');

chokidar.watch('./src/*.soy').on('all', event => {
  if (event === 'change' || event === 'add') {
    npmRunScript('metalsoy');
  }
});

npmRunScript('webpack --watch');
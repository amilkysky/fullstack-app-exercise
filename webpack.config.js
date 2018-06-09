const path = require('path');
const SRC = path.join(__dirname, '/client/src');
const DIST = path.join(__dirname, '/client/dist');

module.exports = {
   entry: `${SRC}/index.js`,
   output: {
       path: DIST,
       filename: 'bundle.js'
   },
   module: {
       rules: [
           {
               test: /\.js/,
               include: SRC,
               loader: 'babel-loader',
               query: {
                 presets: ['react', 'es2015']
              }
           }
       ]
   },
   stats: {
       colors: true
   },
   devtool: 'source-map'
};

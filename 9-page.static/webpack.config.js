const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const alias = require('../core-alias');

const dist = './dist';

module.exports = {
   resolve: {
      extensions: ['.scss', '.js'],
      alias,
   },
   entry: './src/app.js',
   output: {
      filename: 'app.js?t=' + new Date().getTime(),
      path: path.resolve(__dirname, dist)
   },
   module: {
      rules: [{
         test: /\.js$/,
         exclude: /node_modules/
      }, {
         test: /\.scss$/,
         exclude: /node_modules/,
         use: [{
               loader: 'file-loader',
               options: {
                  outputPath: '',
                  name: 'style.css'
               }
            },
            'sass-loader'
         ]
      }]
   },
   plugins: [
      new CopyPlugin({
         patterns: [{
            from: './src/index.html',
            to: 'index.html',
            toType: 'file'
         }]
      })
   ]
};
 var path = require('path')

 module.exports = {
     entry: {
         main: './src/main.js'
     },
     output: {
         path: path.resolve(__dirname, '../dist'),
         filename: 'built.js'
     },
     module: {
         loaders: [{
             test: /\.vue$/,
             exclude: /node_modules/,
             loader: 'vue-loader',
             options: {
                 hotReload: true
             }
         }]
     }

 }
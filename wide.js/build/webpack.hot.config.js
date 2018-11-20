var path = require('path')
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.join(__dirname, './'),
        filename: 'built.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    devServer: {
        contentBase: path.join(__dirname, '../'),
        publicPath: "/assets/",
        hot: true,
        host: "localhost",
        port: 8000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

console.log(path.resolve(__dirname, './hotModule'))
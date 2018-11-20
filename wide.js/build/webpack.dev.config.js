var path = require("path");
var webpack = require("webpack");

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "./"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: "vue-loader"
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "../"),
        publicPath: "/dev/",
        hot: true,
        host: "localhost",
        port: 8000
    },
    resolve: {
    	alias: {
    		"@": resolve("src")
    	}
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
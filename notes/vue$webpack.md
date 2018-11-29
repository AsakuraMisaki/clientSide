# Webpack And Vue.js Projects Build
#### [npm](#npm)
#### [vue](#vue2.0+)
#### [webpack](#webpack)
#### [CommonJS & ES2015](#CommonJS+%26+ES2015)

## npm

#### npm install/remove <name> (-g)

> all repertories仓库 can use npm install/remove (-g) to import/remove<br>

#### npm init (options)

> npm init (-y), with -y:generate default package.json<br>

> without -y:generate user-defined package.json<br>
 `json "dependencies: {...}, devDependencies: {...}"` in package.json will be downloaded into node_modules with `npm install` , then you can require them with CommonJS syntax, eg. require('vue-loader')<br>
> `json scripts{"dev": "someCommand"}` in package.json means that you can use corresponding相应的 alias to run user-defined npm command, eg. `npm run dev` = `someCommand`

#### node_modules

*(!) when change your root path property(like name), some error will happen when require the dependencies, node/module.js throw an module not found error*

> the folder to storage your dependencies

## vue2.0+

#### Error

`Error: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build`

> the err indicate that the vue module you import is runtime-only, <strong>resolution</strong> change imported vue version to dev version `import Vue from 'vue/dist/vue.js'(all js refered in webpack entry)`
*(!) the resolution is General but respond on your vue path and available version, in webpack build, if you do not set your development('production'/'development'), default 'production', the vue version is also producion version: named `vue.common.js` or others*

#### the rendered dom structure

> `...<head/><srcipt src="{path}/built.js"/><style>selector{...}</style></head>...` the rendered dom head structure may like the left, the css style will be writed in <style/> scope, and the complied js will be imported with script src attr 

#### vue init (template_name)(project_name)

#### the convenient method to create a particular project with available demo

> eg. to create a webpack project `npm install -g @vue/cli-init
#vue init now works exactly the same as vue-cli@2.x
vue init webpack my-project`

#### vue-loader 

#### official tool to process .vue file

> alone vue-loader is not enough to process` <template/><script/><style/>`, need to add `css-loader`,`vue-template-compiler` and `vue`at least.

## webpack

#### It is not recommended to `npm install -g webpack`

> some unexpected errors will happen with using global webpack command to build a particular project<br>
*(!) the errors is updating*

#### `module.exports = {...}`

> https://webpack.js.org/concepts/

### webpack-dev-server(dev)

> (!) [type/translation], {environment}, (property/variable)<br>
> tutorial: https://webpack.js.org/guides/hot-module-replacement/

#### Differences/Shared options with webpack

> (entry) : define the files[array] needed to be packed <br>
> (output) : (path) is the base path of the output packed file (filename);<br>

***(Diff) in {webpack}, the output file exists in your [fixed disk硬盘] while in {dev}, the output file bytes will be writen in memory instead of be output to fixed disk (the file exists only in the runtime of server)***

> (devServer) : only for {dev}, (contentBase) is the root path of (pulicPath). when start your project in host:port, index.html/default.html/otherDefaultFile will be found in this root path, if not found any available file, {dev} will automatically genarates an index.html which contains the view to show the current root path and files in the path<br>
>> (publicPath) in (devServer) : the virtual route, which is the base path of the output packed file which is ***only in memory***<br>

> example: to open HMR in {dev} 

```html
./index.html
...
<div id="app"></div>
<script src="./assets/built.js"></script>
...
```

```js
./build/webpack-dev-server.config.js
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
    	//this property is invalid失效 in {dev}
        path: path.join(__dirname, './'),
        filename: 'built.js'
    },
    module: {
        rules: [{
            //Regexp
            test: /\.vue$/,
            //which loader to handle the test files
            loader: 'vue-loader'
        }]
    },
    devServer: {
    	//root path: ../build
        contentBase: path.join(__dirname, '../'),
        //the base path of output.filename in output
        //in index.html, use ../build/assets/built.js = ./assets/built.js to refer
        //but remember, in {dev}, the output.filename is only in memory 
        publicPath: "/assets/",
        //hot module replacement(HMR) turn on
        hot: true,
        host: "localhost",
        port: 8000
    },
    plugins: [
    	//HMR plugin
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

#### import ... from '@/...' (alias of symbol)

```js
./required module
import HelloWorld from '@/components/HelloWorld'


./the run config.js (webpack)
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  }
```
> then the '@' -> 'src', 'vue'-> 'vue/dist/vue.esm.js'

#### loader and webpack

> url-loader: think about the following .vue

```html
<template>
  <footer id="tabbar" class="flex-row">
    <!--IMG 0-->
    <img v-bind:src="button.src" v-for="button in bars">
    <!--IMG 1-->
    <img src="../../assets/icon/my.png">
  </footer>
</template>
<!--  -->
<script>
var url = require("../../assets/icons/my.png");
var bars = [
  { src: "../../../static/logo.png"},
  { src: url },
  { src: url }
]
export default {
  data() {
    return {
      bars
    }
  }
}
</script>
```

> the IMG-0 with bars.button[0].src render will fail cause the img can not be transcoding to a legal url, so the {dev} or {vue} will prevent the client to get the static file(real or faked);
*(!) what should you do*
> * import staticFileURL from 'path of staticFile'(or require), then use staticFileURL as a legal url, make sure you install url-loader at first. the process [file-to-url] require it.
> * rewrite the static-res-trust part of your {dev} config (updating)

## CommonJS & ES2015

#### require() and import

> CommonJS:

```js
//./module.js
module.exports = EXPORTED_VAR;

//./main.js
//module = EXPORTED_VAR;
var module = require("./module.js"); 
```
> ES2015:

```js
//./module.js
export default { EXPORTED_VAR };

//./main.js
//module = EXPORTED_VAR;
import module from "./module.js";
```

> Diff: In chrome console.log, module(M0) obeying commonjs standard: 
```{default:{moduleDefined}, __esModule:true}```
module(M1) obeying ES2015:
```{moduleDefined}```<br>
>> so you can resolve that ```M0.default === M1 //true```

# Webpack And Vue.js Projects Build

## npm

* npm install (-g)

> all repertories仓库 can use npm install/remove (-g) to import/remove<br>

* npm init (options)

> npm init (-y), with -y:generate default package.json, without -y:generate user-defined package.json<br>
> `"dependencies: {...}, devDependencies: {...}"` in package.json will be downloaded into node_modules with `npm install` , then you can require them with CommonJS syntax, eg. require('vue-loader')<br>
> `scripts{"dev": "someCommand"}` in package.json means that you can use corresponding相应的 alias to run user-defined npm command, eg. `npm run dev` = `someCommand`

## vue2.0+

### Error

* `Error: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build`

> the err indicate that the vue module you import is runtime-only, <strong>resolution</strong> change imported vue version to dev version `import Vue from 'vue/dist/vue.js'(all js refered in webpack entry)`
*(!) the resolution is General but respond on your vue path and available version, in webpack build, if you do not set your development('production'/'development'), default 'production', the vue version is also producion version: named `vue.common.js` or others*

#### the rendered dom structure

> `...<head/><srcipt src="{path}/built.js"/><style>selector{...}</style></head>...` the rendered dom head structure may like the left, the css style will be writed in <style/> scope, and the complied js will be imported with script src attr 

#### vue init (template_name)(project_name)

* the convenient method to create a particular project with available demo

> eg. to create a webpack project `npm install -g @vue/cli-init
#vue init now works exactly the same as vue-cli@2.x
vue init webpack my-project`

#### vue-loader 

* official tool to process .vue file

> alone vue-loader is not enough to process` <template/><script/><style/>`, need to add `css-loader`,`vue-template-compiler` and `vue`at least.

## webpack

* It is not recommended to `npm install -g webpack`

> some unexpected errors will happen with using global webpack command to build a particular project<br>
*(!) the errors is updating*

* `module.exports = SET:object`

> https://webpack.js.org/concepts/
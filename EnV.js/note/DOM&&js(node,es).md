# DOM JS CSS

## DOM

### Write the width of canvas in js instead of css

> if you are required to change the size of an canvas, this suggestion will be helpful;

### <script type="module" src="./some.js"></script>

* to use es6-export, import and other module spcifications or features

> some.js `export function FnName(){...};`<br>`function FnName(){...} export{FnName};`
> another.js `<script type="module" src="./another.js"></script>`<br>`import {FnName} from "./some.js"`
> or `import FnName from "./some.js"`(use export default(only one))

* always use CORS(http access control)

> it means that server must realize `Access-Control-Allow-Origin: *` or similar response header;
> in node.js, default realize it;
> in another words, this <script> tab will not be passed in no server-side website;

### All expression should be end with semicolon(;)

> Although js expressions are not required to end with ";", some errors would happen since that;
> eg.`var o = {}
(function(){
	console.log(typeof o);
})();`
> the two exps would be explained to one exp, cause function exp fail;

## Express NODE

### middlewares register way: Stack

> command use `express().use([routes...], cb)`<br>
> eg. ("/"=> all routes)
`express().use("/", function(req, res, next){
//some code; 
next();
})` middlewares declaration order is their register order


## ES6

### object: { template: \`str\`}

> \` is added in es6, you can use it in [String Template字符串模板] situation.
> eg.\`user ${user.name} is denied to do ${action} operation. \` 
> \`<p>{{todo.text}} IN
  	<span>{{todo}}</span>
  </p>
\`(newlines)
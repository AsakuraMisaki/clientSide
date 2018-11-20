import Vue from "../node_modules/vue/dist/vue.js"

import Hello from "./component/hello.vue";

new Vue({
	el: "index header",
	components: {Hello},
	template: "<Hello/>"
})
import renderCanvas from "./canvas.js";
import { infoPrint, assertValue } from "./JSTest.js";
//import myComponent from '../vue/myComponent.vue';
// renderCanvas("canvas-global");

try {

    var app = new Vue({
        el: "#vue-mes",
        data: {
            mes: "HelloWorld",
            tip: "the tip info",
            flag: true
        },
        methods: {
            toogleTip: function() {
                if (this.flag) {
                    let mes = this.mes;
                    this.mes = this.tip;
                    this.tip = mes;
                    this.flag = false;
                }
                else {
                    let mes = this.mes;
                    this.mes = this.tip;
                    this.tip = mes;
                    this.flag = true;
                }
            }
        }
    });

    var app1 = new Vue({
        el: "#vue-for",
        data: {
            arr: [
                "HelloWorld",
                "HelloVue",
                "Hellojs"
            ]
        },
    });

    var app2 = new Vue({
        el: "#vue-if",
        data: {
            see: true
        },
    });

    var app3 = new Vue({
        el: "#vue-model",
        data: {
            mes: "input to change"
        },
    });

    Vue.component("todo-item",{
        props: ["todo"],
        template: `
        <p>{{todo.text}} I
            <span>{{todo}}</span>
        </p>
        `
    });
    var app4 = new Vue({
        el: "#vue-component",
        data: {
            list: [
                {id : 0, text: "item.id=0"},
                {id : 1, text: "item.id=1"},
                {id : 2, text: "item.id=2"}
            ]
        }
    });

} catch (err) {
    infoPrint(err.stack, "red");
}
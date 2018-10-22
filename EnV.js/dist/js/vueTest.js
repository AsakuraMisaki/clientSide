import renderCanvas from "./canvas.js";
import { infoPrint, assertValue } from "./JSTest.js";
// import Vue from "vue";
// import myComponent from "../vue/myComponent.vue";
// renderCanvas("canvas-global");

try {

    var app = new Vue({
        el: "#vue-mes",
        data: {
            tip: "the tip info",
            flag: false,
            dateRef: new Date()
        },
        created: function() { this.mes = "HelloCreated" },
        computed: {
            reversedMes: function() {
                return this.mes.split('').reverse().join('');
            },

            date: {
                get: function() {
                    return this.dateRef;
                },

                set: function() {
                    let mes = this.mes;
                    this.mes = this.tip;
                    this.tip = mes;

                }
            }
        },
        methods: {
            toogleTip: function() {
                this.dateRef = new Date();
                this.date = new Date();
            },
        }
    });

    var app1 = new Vue({
        el: "#vue-for",
        data: {
            arr: [
                app.mes,
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
            mes: "",
            isblue: true,
            classes: {
                background: "#49f"
            }
        },
        computed: {
            blue: function(){
                if(this.isblue === true){
                    return "bg-blue";
                }
            }
        }
    });

    Vue.component("todo-item", {
        props: ["todo"],
        template: `
        <p>{{todo.text}} IN
            <span>{{todo}}</span>
        </p>
        `
    });
    var app4 = new Vue({
        el: "#vue-component",
        data: {
            list: [
                { id: 0, text: "item.id=0" },
                { id: 1, text: "item.id=1" },
                { id: 2, text: "item.id=2" }
            ]
        }
    });

} catch (err) {
    infoPrint(err.stack, "red");
}
define(["vue"], function(Vue) {
    var vm = new Vue({
        el: "#vue",
        data: {
            mes: 1
        },
        methods: {
            vueTest: function() {
                this.mes++;
            }
        }
    });

})

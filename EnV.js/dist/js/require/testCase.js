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

// var vm = new Vue({
//     el: "#vue",
//     data: {
//         mes: 1
//     },
//     methods: {
//         vueTest: function() {
//             this.mes++;
//         }
//     }
// });

QUnit.test("hello test", function(assert) {
    assert.ok(1 == "1", "Passed!");
});
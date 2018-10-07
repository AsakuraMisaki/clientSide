new Vue({
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

function vueImitate(id, value, newValue) {
    try {
        console.log(this + "");
        var e = document.getElementById(id) || false;
        if (!e) {
            throw Error("element " + id + " not found")
        }
        var node = e.childNodes[1].childNodes[0];
        var r = node.nodeValue.match("&" + value + "&");
        node.nodeValue = node.nodeValue.replace(r, newValue);
        node.innerHTML = node.nodeValue;
        assertValue.call(String, "4", 4);
    } catch (err) {
        console.log(err.message);
    }
}
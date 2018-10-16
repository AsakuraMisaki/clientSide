import renderCanvas from "./canvas.js";
import { infoPrint, assertValue } from "./JSTest.js";
// renderCanvas("canvas-global");

var Outer = function() {

};

try {

    var globalValue = "globalValue";

    var g;
    var Proto = function(){
        this.diff = [6];
    }
    Proto.prototype.only = [6];

    var p = new Proto();
    var p1 = new Proto();
    p.diff.push(5);
    p.only.push(8);
    var close = function(s) {
        var test = 1;
        var fn = function(n) {
            var fff = 5
            var fn1 = function(n){
                var ffff = 6
                return function(n){
                    return fff+ "/" + test + "/" + ffff;
                }
            }
            return fn1;
        };
        return fn;
    };
    var toolate = "toolate";

    var c = close("s");
    var c1 = new c("n");
    var c2 = new c1("n");
    //infoPrint(c2("n"));
    var ob = new Object({});

} catch (err) {
    infoPrint(err.stack, "red");
}
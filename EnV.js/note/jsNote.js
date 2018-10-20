//MISAKI
//EXPRESS & NODEJS
//debug and find the differences among log/debug orders

//notes:
//1.  req.params[n]: (route)/temp/*/*/*
//->/temp/x/y/z->req.params[0]= x; [1]= y; [2]= z;
//2.  req.query: (url)/temp?x=2&y=3->req.query.x=2;
//3.  we do not know which callback(回调函数) faster!
//4.  requireJS: ./==>root; ../==>baseUrl of root 
//5.  express-static: express.static('staticFilePath', op)==> need not to add relative routes, instead use root
//==> (right)host/static.file==> (false)host/staicFilePath/static.file==> because the staicFilePath route will be 
//appended to global staticFile list, when staticFile is visited, server will find and send the file from the list
//6.  ! never use insert into tbls (cols) values(), instead use insert into tbls set cols=values, cols= values
//function return
var t0 = function() {
    var b = function() { return 1; };
    console.log(b);
    console.log(b());
};
//t0();


//this specificities
var t1 = function() {
    var G = {
        t0: { Object: '/' },
        this0: function() { console.log(this); }, //function/inside type: this==> the object
        this1: this, //key-value/outside type: this==> global this
    };
    G.this0(); // this1 have many options
    exports.Gx = G; //= module.exports.[customName]= definedName
};
//t1();

//var specificities
var t3 = function() {
    var ob = {
        ob: function() { return this },
        x: 1
    }
    var obv = ob;
    var obn = ob.ob();
    console.log(ob.x + '/' + obv.x + '/' + obn);
    obv.x = 2;
    console.log(ob.x + '/' + obv.x + '/' + obn.x);
}
//t3();

//try-catch in error handle(js included)

var t4 = function(s) {
    try {
        s = Buffer.from(s, 'base64')
        //!here will be stopped by throw(from s above) and turn to catch
        console.log('!here will be stopped by throw(from s above) and turn to catch')
    } catch (err) {
        console.log('err0: ' + err)
        try {
            console.log('!here will not be stopped by throw')
            throw 'err1: first argument is illegal'
            console.log('!here will be stopped by throw and turn to catch')
        } catch (err) {
            console.log(err);
        }
    } //once an error is thrown and not be caught, program finish
    var e = 'catch all err thrown';
    console.log(e); //if not using try-catch, these will not be executed执行
}
//t4()

//implicit arguments in js function: arguments, this
var t5 = function() {
    console.log(arguments);
    console.log(arguments.length);
}
//t5('x', 'y');

//datatype with var
var t6 = function() {
    var ob = { num: 123, s: 's', ob: { n: '?' }, arr: ['1', '2'] }
    var obn = ob.num
    obn++
    console.log('n->' + obn + '/' + ob.num)
    var obs = ob.s
    obs = obs + '?'
    console.log('s->' + obs + '/' + ob.s)
    var obob = ob.ob
    obob.n = 'x'
    console.log('ob->' + obob.n + '/' + ob.ob.n)
    var oba = ob.arr
    oba[0] = '3'
    console.log('arr->' + oba[0] + '/' + ob.arr[0])
    var ob1 = { ob: { n: '??' } }
    ob1 = ob
    ob1.ob = 'null'
    console.log('new ob->' + ob1.ob + '/' + ob.ob)
}
//t6()


//js test module(assert)
var assert = require('assert')
var t7 = function() {
    assert(true, 'assert true here')
    //assert(false, 'assert fail here')
}
//t7()

//speed compare: global variable and local variable
var g = 0
var t8 = function() {
    var start = new Date();
    for (var i = 0; i < 10000; i++) {
        g = i
        console.log(g);
    }
    var elapsed = new Date() - start;
    console.log('elapsed time: ' + elapsed);
}
//t8()

//prototype
var t9 = function() {
    var Proto = function() {
        this.diff = ["d"];
    }
    Proto.prototype.only = ["o"];
    var p = new Proto();
    var p1 = new Proto();
    p.diff.push(5); //reflect in special object
    p.only.push(8); //operate Proto.prototype.only, reflect in all new Proto()
    console.log(p.only === p1.only); //true
    console.log(p.diff + "/" + p1.diff); //special each
    console.log(Proto.prototype.only); //the same reference to Proto.prototype.only
}
//t9();

//closure闭包
var closure = function() {
    var outer = function(argOuter = "/ao") {
        var variableOuter = "/o";
        outer = null; //outer which points to an anonymous function
        return function middle(argMiddle = "/am") {
            var variableMiddle = "/m";
            var inner = function(argInner = "/ai") {
                var variableInner = "/i";
                inner = null; //inner which points to an anonymous function, not global
                return function(deeper = "/deeper") {
                    var variableDeeper = "/d";
                    console.log("saved variables in closure: outer");
                    console.log(outer + argOuter + variableOuter);
                    console.log("saved variables in closure: middle");
                    console.log(middle.name + argMiddle + variableMiddle);
                    console.log("saved variables in closure: inner");
                    console.log(inner + argInner + variableInner);
                    console.log("variables in self scope:");
                    console.log(deeper + variableDeeper);
                }
            }
            return inner;
        }
    }
    var middleR = new outer(); //middle(){...}
    var innerR = new middleR(); //inner(){...}
    var deeper = new innerR(); //anonymous匿名 function{var variableDeeper...}
    //outer(); middleR(); innerR(); //err
    //deeper(); //output all closure variables/inline objects
}

//funciton expression, local scope
var t10 = (function ex() {
    var closureVariable = "CLOSURE"
    return function() {
        console.log("function expression assignment is ok");
        return "function expression " + closureVariable;
    }
}) //()/*ex()*/()/*the return anonymous function*/
//ex(); //err
//console.log(t10);

//combination inheritance
var t11 = function() {
    var superTypeCall = 0;
    var superType = function(argSuper = "superTypeCall: ") {
        this.superName = "superType";
        this.override = true;
        this.array = [6];
        superTypeCall++;
        console.log(argSuper + superTypeCall);
    }
    superType.prototype.getProperty = function(name) {
        console.log(this[name]);
    }
    var subType = function() {
        //promise each subType object has own copy of superType.prototype,
        //avoid extends 1-1{}
        //property inherit 1-1
        superType.call(this);
        this.subName = "subType";
    }

    //prototype inherit 1-1{
    // subType.prototype = {
    //     array: [6],
    //     getProperty: superType.prototype.getProperty,
    //     otherProperties: "/"
    // }
    //this method like above(of cause rewrite)
    //using single is Deprecated反对的,if has extends of reference type(array, object+) 
    subType.prototype = new superType();
    //}
    var subR = new subType();
    //reflect in both prototype and object if no property inherit 1-1
    subR.array.push(7);
    new subType().getProperty("array");
    subR.getProperty("array");
}
//t11()

//[parasitic combination inheritance寄生(构造函数)组合(原型链)式继承]
//avoid unnecessary superType() call with above combination inherit
var parasitic = function() {
    function Extend(object) {
        function F() {}
        F.prototype = object;
        return new F();
    }

    function inheritPrototype(subType, superType) {
        let prototype = Extend(superType.prototype);
        //prototype.ref.push(true);
        console.log("is prototype === superType.prototype? " + (prototype === superType.prototype));
        prototype.constructor = subType;
        subType.prototype = prototype;
    }

    function superType(argSuper) {
        this.name = argSuper || "super";
        this.refN = ["refNotChanges?true"];
    }

    superType.prototype.getProperty = function(pName) {
        console.log(this.name + ": " + this[pName]);
    }
    superType.prototype.ref = ["refChanges?"]

    function subType(argSub) {
        //parasitic, using arguments is ok
        //properties extends
        /*promise each subType object has own copy of superType.prototype istead of pointer to 
        true prototype object*/
        superType.call(this, "super");
        this.name = argSub || "sub";
    }
    //prototype extends
    inheritPrototype(subType, superType);

    var sub = new subType();
    sub.refN.push(false);
    sub.ref.push(true);
    sub.getProperty("refN");
    new subType("new sub").getProperty("refN");
    new superType("new super").getProperty("refN");
    new subType("new sub").getProperty("ref");
    new superType("new super").getProperty("ref");
}
//parasitic();
//(!) generally inheritance, adopt construtor mix prototype

//error
var errorTest = function(err) {
    try {
        throw new ReferenceError(err);
    } catch (err) {
        // \u0029 = )
        console.log(err.stack.match(/[ -z]+\n[ -z]+\u0029/)[0]);
    }
}
//errorTest("new refError");
//console.log("continue");

//prototype function and command function(anonymous or named) in closure
var protoFnAndCommandFn = function() {
    var commandFn = function(time) {
        console.log(time);
        if (time === 1) {
            return;
        }
        time++;
        (function() {
            commandFn(time);
        })();
    }
    console.log("command");
    commandFn(0);

    var Proto = function(name) { this.protoFn(0); };
    var AnotherProto = function() {};
    AnotherProto.prototype.protoFn = function(op, fn) {
        fn();
    }
    Proto.prototype.protoFn = function() {
        //this is new Proto();
        var that = this;
        //each function has its own scope and closure since defination
        //defination has no limit in its position, as argument is ok
        new AnotherProto().protoFn("op", function() {
            console.log(that.protoFn);
        })
    }
    console.log("proto");
    new Proto("proto");
}
//protoFnAndCommandFn();

//regexp
var regexp = function() {
    console.log("example: values in object[index] stringify");
    console.log(
        //for mysql storage json data
        (function objectToString(o) {
        var str = ""
        for (propertyName in o) {
            if(typeof o[propertyName] === "object"){
                o[propertyName] = JSON.stringify(o[propertyName]);
            }
            str += ("\"" + o[propertyName] + "\",");
        }
        return str.match(/".+"/)[0];
    })({ 
        t: "sss", 
        t1: 5, 
        t2: {array: ["www"]}
    }))
}
//regexp();
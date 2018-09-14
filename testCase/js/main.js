require.config({

    paths: {
        "jquery": ["https://cdn.bootcss.com/jquery/1.10.2/jquery.min"],
        "vue": ["https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue"],

        //unknown conflict: qunit can not work at this way
        // "qunit": ["../../qunit/qunit"],

        "vueDev": ["./vueDev"],
        "testCompare":["./testCompare"],
        "qunitTest":["./qunitTest"]
    },


    //baseUrl: "js"

});

require(["vueDev", "testCompare", "qunitTest"], function(){
	//testCase.HelloJS();
});
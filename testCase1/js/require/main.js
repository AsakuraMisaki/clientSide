require.config({

    paths: {
        "jquery": ["https://cdn.bootcss.com/jquery/1.10.2/jquery.min"],
        "vue": ["https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue"],

        //unknown conflict: qunit can not work at this way
        // "qunit": ["../../qunit/qunit"],
        //"qunitTest":["./qunitTest"],

        "vueDev": ["./vueDev"],
        "testCompare":["./testCompare"],
        
    },


    //baseUrl: "js"

});

require(["vueDev", "testCompare"], function(vueDev, testCompare){
	//testCase.HelloJS();
});
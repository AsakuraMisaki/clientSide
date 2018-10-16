 //additional functions 

//common infoPrint function(div>p)
function infoPrint(value, color="#000", message="InfoPrint: "){
	//value = (typeof(value) === String)? value : value.toString()
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(message + value));
    p.style.cssText = "color: " + color + ";";
    document.getElementsByTagName("div")[0].appendChild(p);
}

//user-defined assert: value only
function assertValue(actual, expected){
	infoPrint("udAssert invoked", "lightGreen");
	infoPrint("Object here: " + this, "lightGray");
	if(actual == expected){
		infoPrint("pass", "lightGreen");
	}
	//[shear剪切] necessary error-info to print
	else{
		var err = new Error("(a)" + actual + " != (e)" + expected);
		err.stack = err.stack.replace(err.stack.match(/at[ -z]+/), "");
		infoPrint(err.stack, "red");
	}
}

export{infoPrint, assertValue};




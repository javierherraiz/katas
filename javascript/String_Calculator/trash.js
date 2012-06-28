/* ExpresionRegular.exec(string)*/

var matched = null;
var reg = /\[([a-zA-Z0-9])+\]/g;
var str = "La casa [2] es genial [para] vivir [5] personas";
while ((matched = reg.exec(str)) != null) { 
	console.log(matched[0]);
}


"1\n2,4".match(/^\/\/(.+)\n/)

/^\/\/(\[.+\])+\n/.test("//[@@@yy][##]\n1##2@@@yy4"); // TRUE varios de limitadores con []


/^\/\/(.+)\n/.test("//@@@\n12,4"); //TRUE

var matched = null;
var reg = /\[([^\[\]]+)\]/g;
var str = "//[@@@yy][##]\n1##2@@@yy4";
while ((matched = reg.exec(str)) != null) { 
	console.log(matched[0]);
}

"[&&]".replace(/[-[\]{}*+?.,\\|^$|#\s]/g,"\\$&"); // escaping special characters. e.g: [ -> \[


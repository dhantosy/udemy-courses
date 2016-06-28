// Tell hello only takes string as argument
function hello(string : string){
	console.log("hello " + string);
}

hello("Jon");
//if you put other than string eg. hello(1), it will return an error when transpiled, as it only takes string argument
var x = 10;
var y = 10;
console.log("x vaut " + x);
console.log("y vaut " + y);
{
	var _x = 2;
	y = 2;
	console.log("x vaut maintenant " + _x);
	console.log("y vaut " + y);
}

console.log("x vaut " + x);
console.log("y vaut " + y);

function concatenation() {
	var prenom = "Denis";
	var age = 1200;
	var ageDenis = "Je suis"+ ${prenom}+" et jai "+${age}+" ans";
	console.log(ageDenis);
}

concatenation();
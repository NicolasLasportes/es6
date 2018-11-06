var x = 10;
var y = 10;
var z = 10;

function letAndVar(x, y, z)
{
	console.log("x vaut " + x);
	console.log("y vaut " + y);
	console.log("z vaut " + z);
	{
		x = 2;
		let y = 2;
		const z = 2;
		//z = 30;
		console.log("x vaut maintenant " + x);
		console.log("y vaut " + y);
		console.log("z vaut " + z);
	}
	console.log("x vaut " + x);
	console.log("y vaut " + y);
	console.log("z vaut " + z);
}

function concatenation() 
{
	var prenom = "Denis";
	var age = 1200;
	var ageDenis = `Je suis ${prenom} et jai ${age} ans`;
	console.log(ageDenis);
}

function add(x = 0, y = 0) 
{
	let sum = x + y;
	console.log(sum);
}

function findInArray()
{
	var array = [4, 9, 16, 29];
	var result = array.find(higherThan18);
	console.log(result);
}

function higherThan18(number)
{
    return number > 18;
} 

function integers()
{
	var x = 10;
	console.log(Number.isInteger(x)); 
	console.log(Number.isInteger(10.5));
	console.log(Number.isSafeInteger(120));    
	console.log(Number.isSafeInteger(999999999999999999999999));
}

function isFiniteOrNAN()
{
	console.log(isFinite(10/0));    
	console.log(isFinite(10/5));        
	console.log(isFinite("era"));  
	console.log(isNaN("Hello"));
	console.log(isNaN(["éae", 23]));   
	console.log(isNaN(3));   
}
var promoAuch2 = ["Luc", "Alex", "Helder", "Ben", "John", "Marco", "Dania", "Zakia", "Houssine", "Adeline", "Dylan", "Marc", "Max", "Nico"];

function forLoop(promoAuch)
{
	for(let apprenant of promoAuch)
	{
		console.log(apprenant);
	}
}

function forWithIndex(promoAuch)
{
	for (let [i, apprenant] of promoAuch.entries()) 
	{
	    console.log(`Index : ${i} => Apprenant: ${apprenant}`);
	}
}

let unObjetJs = {
    appelDeLaFonctionAfficher() 
    {
        this.afficher("Je suis une fonction dans un objet") ;
    },
    afficher(message)
    {
        console.log(message);
    }
}

function compare(x, y)
{
	var es5 = function(a, b) {
	     return x * y;
	}
	resultEs5 = es5(x,y);

	const es6 = (a, b) => x * y;
	resultEs6 = es6(x,y);
	console.log(resultEs5);
	console.log(resultEs6);
}

class Personne 
{
    constructor(nom, age) 
    {
        this.nom = nom;
        this.age = age;
    }

    sePresenter() 
    {
        return `Bonjour, je suis ${this.nom} et j'ai ${this.age} ans!`;
    }
}

class Developpeur extends Personne 
{
    constructor(nom, age, language) 
    {
        super(nom, age);
        this.language = language;
    }

    languagePrefere() 
    {
       return super.sePresenter() + ` Je suis un développeur qui aime ${this.language}`;
    }
}

//let vs var
//letAndVar(x, y, z);

//no more concatenation
// concatenation();

//default value declared in function's parameters
// add(4, 68);

//function find and findIndex()
//findInArray();

//isinteger or not and safe integers -(253 - 1) +(253 - 1)
//integers();

//isFinite and IsNAN
//isFiniteOrNAN();

//loop for of
//forLoop(promoAuch2);

//loop for with iterable object
//forWithIndex(promoAuch2);

//inception, a function in an object
//unObjetJs.appelDeLaFonctionAfficher();

//arrow function
//compare(x, y);

//new objects
// let unePersonne = new Personne("Claude", 58);
// console.log(unePersonne.sePresenter());
// let unDeveloppeur = new Developpeur("Jean Jacques", 56, "JavaScript");
// console.log(unDeveloppeur.languagePrefere());
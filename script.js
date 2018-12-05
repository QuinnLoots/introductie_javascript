//oefening 1 variabelen
let n = 0;
let x = "Web developer";
let y = "Belgie";
let z = "Josefien";

console.log("U wordt " + x +" en woont in "+ y +", en bent getrouwd met "+ z +" met " + n + " kinderen.");

//oefening 2 variabelen
let currentYear = 2018;
let birthYear = 1995;

console.log("U bent "+ (currentYear - birthYear) + " jaar oud.");

//oefening 3 variabelen
let currentAge = 23;
let maxYear = 100;

console.log("Je hebt nog steeds " + (maxYear-currentAge) + " jaar voordat je de leeftijd van "+ maxYear + " jaar bereikt hebt.");


//oefening 1 vergelijkingen
let language="fr";
let message;


if (language === "fr"){
    message="Bonjour tout le monde";
} else if (language === "nl"){
    message="Hallo iedereen";
} else {
    message="hello world"
}

console.log(message);

//oefening 2 vergelijkingen

let score = 60;
let rank;

if (score>=90){
    rank="A";
} else if (score<50){
    rank="C";
} else{
    rank="B";
}

console.log(rank);

//oefening 3 vergelijkingen

let word = "apple";
let amount = 2;
let result;

if (amount>1){
    word = word+"s";
}
result = "Ik heb " + amount + " " + word;
console.log(result);

//oefening 1 functies
let aftr =function(a,b){
    return a-b;
}

let som = function(a,b){
    return a+b;
}

let verm = function(a,b){
    return a*b;
}

let perc = function(a,b){
    return ((a/100)*b);
}

let speed = function(a,b){
    return a/b + " km/h";
}

//oefening 1 loops

for (let i=0;i<=20;i++){
    if (i%2>0){
        console.log(i + " is oneven");
    } else{
       console.log(i + " is even");  
    }
}

//oefening 2 loops

for (let i=0;i<=10;i++){
    console.log(i + " x 9 = " + (i*9) );
}

//oefening 3 loops
let ranks;
for (let i=0;i<=100;i++){
    if (i<65){
        ranks = "F";
    } else if (i<70){
        ranks = "D"
    } else if (i<80){
        ranks= "C";
    } else if (i<90){
        ranks= "B";
    }else{
        ranks= "A";
    }
    console.log("Voor "+i+" punten krijgt u rank "+ ranks);
}

//oefening 4 loops

let teken="";

for (let i=1;i<=5;i++){
    teken = teken + "* ";
    console.log(teken);
}








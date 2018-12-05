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
// oefening 1 arrays
numberArray=[1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
let total=0;
for (i=0;i<numberArray.length;i++){
total = total + numberArray[i];
}
console.log(total);

//oefening 2 arrays

acteurArray=["Stalone","Cruiz","Quinn"];
for (i=0;i<acteurArray.length;i++){
    console.log("Nummer "+(i+1)+" is " +acteurArray[i]);
}

// oefening 3 arrays

marioArray=["Mario", "Luigi", "Peach"];
marioArray2=marioArray;
marioArray2.push("Bowser");

console.log(marioArray2);

// oefening 1 math

arrayMin=[7, 5, -12, 6, 32, 18, 14, -2];
min = Math.min(...arrayMin);
console.log(min);


arrayMax=[-3, 9, 21, 36, 27, 54, 17, 35];
max=Math.max(...arrayMax)
console.log(max);

console.log(min+max);

//oefening 2 math

floatSpeed=10.4;
lowSpeed= Math.floor(floatSpeed);
highSpeed= Math.ceil(floatSpeed);


//oefening 3 math

console.log(Math.floor((Math.random() * 51) + 50));
console.log(Math.floor((Math.random() * 2) + 0));
console.log(Math.floor((Math.random() * 11) + 0));

//Math.floor(Math.random() * (max - min + 1)) + min;

//oefening 4 math

namenArray= ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Raptile", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
willekeurig = Math.floor(Math.random() * (namenArray.length + 1));
console.log(namenArray[willekeurig]);

//oefening 1 objecten

let character = {
        name : "Quinn",
        age : 23,
        items_to_give: ["paper","remote control","USB stick"],
        giveItem : function(a){
            console.log( this.items_to_give[a] );   
        }
    };

for(let key in character){                 
        console.log( key );                
        console.log( character[key] );         
    }
randomNumber = Math.floor(Math.random() * (3));
character.giveItem(randomNumber);

//oefening 2 objecten

function MyFirstConstructor(titel, fysiek, magie, level, beschikbaar) {
        this.title = titel; 
        this.physic = fysiek;
        this.magic = magie;
        this.minLevel = level;
        this.available = beschikbaar;         
    };

zwaard = MyFirstConstructor("dragonsword",150,20,10,true);
bijl = MyFirstConstructor("battleaxe",100,0,5,false);
scepter = MyFirstConstructor("magicscepter",0,150,20,true);

console.log(zwaard.title);
weaponArray = [zwaard,bijl,scepter];

for (i=0;i<=weaponArray.length;i++){
    console.log(weaponArray[i].title);
}

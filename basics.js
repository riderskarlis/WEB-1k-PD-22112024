let personAge = 17;
let namesArray= ["Jānis", "Anna", "Zaiga"];

if (personAge <= 18) {
    console.log("Nepilngadīgs!");
} else {
    console.log("Pilngadīgs!");
}

for (let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}

function sayHello(name) {
    return "Labdien, " + name + "!";
}

console.log(sayHello("Kārlis"));
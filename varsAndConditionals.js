/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

//yo whats up dawg

let kenobiAttack = 25;
let skywalkerAttack = 35;

if (kenobiAttack > skywalkerAttack){
    console.log('Obiwan has a better attack.')
} else if(kenobiAttack < skywalkerAttack){
    console.log('Anakin has the better attack.')
} else {
    console.log('Obiwan and Anakin have the same attack.')
}


let kenobiHealth = 100;
let kenobiDefense = 0;

if(skywalkerAttack >= kenobiHealth){
    console.log('Obiwan was killed.')
} else {
    kenobiHealth = kenobiHealth - skywalkerAttack

    console.log('Kenobi health is now ' + kenobiHealth)
}

kenobiDefense += 30;

for(let i = 0; i < 5; i++){
    kenobiHealth -= (skywalkerAttack - kenobiDefense)
    console.log(`Obiwan's health is now ${kenobiHealth}`)
}

while(kenobiHealth){}
let name = "Christina Evans"; 
let age = 33; 
let birthday = "September 7";
const detroitGC = true;  
const lifeEvents = ["I was born in Farmington Hills, Michigan.", "I went to Eastern Michigan University", "I graduated with a BFA",
                    "I'm a student in the front-end bootcamp"];
                    
if (detroitGC) {
    console.log (`My name is ${name} and I am a student at Grand Circus Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`); 
}  else { 
    console.log (`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`); 
} 

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]); 
} 

let counter = 0;

while (true) {
    counter++;
    var randomNumber = Math.floor(Math.random() * 11);

    if (randomNumber === 5) {
        console.log("5===5. It took" +counter+ "iteration to randomly generate the number 5.");
    break 
    } else { 
        console.log(randomNumber + "!==5"); 
    }
}


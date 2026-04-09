// Planet Object
let planet = {
    name: "TRAPPIST-1e",
    type: "terrestrial",
    distanceFromEarth: "41 light-years",
    orbitalPeriod: "6.1 days"    
};

document.write("<br> <h3> Here is some information about another planet that resides outside of our solar system in a similar Goldilocks zone: </h3>");
document.write("Planet Name: " + planet.name + "<br>");
document.write("Planet Type: " + planet.type + "<br>");
document.write("Distance from Earth: " + planet.distanceFromEarth + "<br>")
document.write("Days to Orbit Sun: " + planet.orbitalPeriod + "<br>");

// Animal Object Constructor
function Animal(animalName, animalSize, animalDiet, funFact) {
this.name = animalName;
this.size = animalSize;
this.diet = animalDiet;
this.fact = funFact;
this.animalStat = function() {
return this.name + "<br>" + this.size + "<br>" + this.diet + "<br>" + this.fact + "<br>";
    };
}
// New instance of Animal Object (Tardigrade)
let tardigrade = new Animal ("Tardigrade", "microscopic", "omnivorous", "The first animal known to survive in space!")

document.write("<h3> Keeping with things that are <i> extremely </i> cool, have you heard of this extremophile? </h3>");
document.write("Animal Name: " + tardigrade.name + "<br>");
document.write("Animal Size: " + tardigrade.size + "<br>");
document.write("Animal Diet: " + tardigrade.diet + "<br>");
document.write("Fun Fact: " + tardigrade.fact + "<br>");

document.write("<h3> Now here's what you've entered! </h3>"); 

// User Input
let name = prompt("What is your Animal's Name?", "ex: Loris");
let size = prompt("How big is your animal?", "ex: small, or 1 lb, or 10 inches");
let diet = prompt("What is your animal's diet? ", "ex: omnivorous");
let fact = prompt("What is a fun fact about your animal? ", "ex: My animal is venimous!");

// New instance of Animal Object (User's Animal)
let userAnimal = new Animal (name, size, diet, fact);

//document.write(userAnimal.animalStat());
document.write("Animal Name: " + userAnimal.name + "<br>");
document.write("Animal Size: " + userAnimal.size + "<br>");
document.write("Animal Diet: " + userAnimal.diet + "<br>");
document.write("Fun Fact: " + userAnimal.fact + "<br>");
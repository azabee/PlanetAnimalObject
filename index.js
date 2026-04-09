let planet = {
    name: "TRAPPIST-1e",
    type: "terrestrial",
    distanceFromEarth: "41 light-years",
    orbitalPeriod: "6.1 days"    
};
document.write("<h3> Here is some information about another planet that resides outside of our solar system in a similar goldilocks zone: </h3>");
document.write("<br>" + "Planet Name: " + planet.name + "<br>");
document.write("Planet Type: " + planet.type + "<br>");
document.write("Distance from Earth " + planet.distanceFromEarth + "<br>")
document.write("Days to Orbit Sun: " + planet.orbitalPeriod + "<br>");

function Animal(animalName, animalSize, animalDiet, funFact) {
this.name = animalName;
this.size = animalSize;
this.diet = animalDiet;
this.fact = funFact;
this.animalStat = function() {
return this.name + "<br>" + this.size + "<br>" + this.diet + "<br>" + this.fact + "<br>";
    };
}
let tardigrade = new Animal ("Tardigrade", "microscopic", "omnivorous", "The first animal known to survive in space!")

document.write("<h3> Keeping with things that are exteremely cool, have you heard of this extremophile?: </h3>");
document.write("<br>" + "Animal Name: " + tardigrade.name + "<br>");
document.write("Animal Size: " + tardigrade.size + "<br>");
document.write("Animal Diet: " + tardigrade.diet + "<br>");
document.write("Fun Fact: " + tardigrade.fact + "<br>");

document.write("<h3> Now it's your turn! </h3>");

    let userAnimal = new Animal ((prompt), (prompt), (prompt), (prompt));
    prompt("What is your Animal's Name?", "ex: Loris");
    userAnimal = prompt("How big is your animal?", "ex: Small, or 1lbs, or 10 inches");
    userAnimal = prompt("What is your animal's diet? ", "ex: Omnivore");
    userAnimal = prompt("What is a fun fact about your animal? ", "ex: My animal is venimous!");

document.write("<h3> Keeping with things that are exteremely cool, have you heard of this extremophile?: </h3>");
document.write("<br>" + "Animal Name: " + userAnimal.name + "<br>");
document.write("Animal Size: " + userAnimal.size + "<br>");
document.write("Animal Diet: " + userAnimal.diet + "<br>");
document.write("Fun Fact: " + userAnimal.fact + "<br>");
/**
 * Created by rensvanw on 8-9-16.
 */
// Opgave 1 //

let rij = [4,3,7,5,1,456,9,23];

//Zoek het kleinste getal in de rij waarbij een vooraf gegeven startpunt is
function smallestNumber(rij, startIndex) {
    let smallest = startIndex;
    for (let i = startIndex + 1; i < rij.length; i++) {
        if (rij[i] < rij[smallest]) {
            smallest = i;
        }
    }
    return smallest;
}

// Wissel het grotere getal om voor het kleinere getal in de rij bij een opgegeven indexwaarde
function swap(rij,i,smallest){
    let cache = rij[i];
    rij[i] = rij[smallest];
    rij[smallest] = cache;
}

// Sorteer Functie
function sorteer(rij){
    for(let i = 0; i<rij.length; i++){
        let smallest = smallestNumber(rij, i);
        swap(rij,i,smallest);
    }
}
console.log("Opgave 1","\n");
console.log("Ongesorteerde rij: ", rij);
sorteer(rij);
console.log("Gesorteerde rij: ", rij,"\n");

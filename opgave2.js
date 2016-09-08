/**
 * Created by rensvanw on 8-9-16.
 */
// Opgave 2 //

let string = "rens";
let newString = "";

function mirror(string){
    for(let x=string.length-1; x>=0; x--){
        newString += string[x];
    }
    return newString;
}

let newstring = mirror(string);

console.log("Opgave 2 \n");
console.log("Normale string: ",string);
console.log("Mirrored string: ",newstring);







/**
 * Created by rensvanw on 13-9-16.
 */

function mirror(str) {
    let stringArray = str;
    let reversedString = "";
    if (stringArray.length == 1) {
        return reversedString = reversedString + stringArray;
    }
    return mirror(stringArray.substr(stringArray.length / 2)) +
        mirror(stringArray.substr(0, stringArray.length / 2))

}

let reversedString = mirror("yolo");
console.log(reversedString);
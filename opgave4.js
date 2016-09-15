/**
 * Created by rensvanw on 13-9-16.
 */

// Comlexiteit = T(n) =

// opgave 4 //

let links = 0, rechts = 0, array = [1, 3, 5, 10, 4, 7];

let rij = array.sort(function (a, b) {
    return b - a;
});

function weegschaal(array) {
    let rij = array;
    if (rij.length == 1) {
        links = rij[0];
        console.log("De weegschaal heeft links: ", links, "kg en rechts ", rechts, "kg");
    }
    else {
        let laatsteGetalRij = rij[rij.length - 1];
        weegschaal(rij.slice(0, rij.length - 1));
        for (let i = 0; i < rij.length; i++) {
            if (links > rechts) {
                rechts = rechts + laatsteGetalRij;
                console.log("De weegschaal heeft links: ", links, "kg en rechts ", rechts, "kg");
                return rij;
            }
            else {
                links = links + laatsteGetalRij;
                console.log("De weegschaal heeft links: ", links, "kg en rechts ", rechts, "kg");
                return rij;
            }
        }

    }
}

weegschaal(rij);
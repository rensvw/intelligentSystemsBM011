/**
 * Created by rensvanw on 15-9-16.
 */

let A = [3, 2, 1];
let B = [];
let C = [];

function hanoi(aantal, startstok, tussenstok, doelstok) {

    if (startstok.length == 1) {
        doelstok.push(startstok.pop());
        startstok.slice(0, 1);
        console.log("Doelstok: ", doelStok);
    }
    else {
        if (aantal > 1) {

            hanoi(aantal - 1, startstok, tussenstok, doelstok);

            doelstok.push(startstok.pop());

            console.log("start:", A, "tussen ", B, "eind: ", C);

            hanoi(aantal - 1, tussenstok, doelstok, startstok);

        }

    }


}


hanoi(A.length, A, B, C);
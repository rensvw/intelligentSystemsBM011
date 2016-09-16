/**
 * Created by rensvanw on 15-9-16.
 */

let A = [1];
let B = [];
let C = [];

function hanoi(aantal, startstok, tussenstok, doelstok) {
    if (aantal == 1 && doelstok.length == 0 && startstok.length == 1 && tussenstok.length == 0) {
        doelstok.push(startstok.pop());
        console.log("Doelstok: ", C);
        return;
    }
    if (aantal > 0) {

        hanoi(aantal - 1, startstok, doelstok, tussenstok);

        doelstok.push(startstok.pop());

        console.log("start:", A, "tussen ", B, "eind: ", C);

        hanoi(aantal - 1, tussenstok, startstok, doelstok);

    }


}

hanoi(A.length, A, B, C);

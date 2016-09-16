/**
 * Created by rensvanw on 15-9-16.
 */

let start = [3, 2, 1];
let tussen = [];
let eind = [];

function hanoi(aantal, startstok, tussenstok, doelstok) {
    if (aantal == 1 && doelstok.length == 0 && startstok.length == 1 && tussenstok.length == 0) {
        doelstok.push(startstok.pop());
        console.log("Doelstok: ", eind);
        return;
    }
    if (aantal > 0) {

        hanoi(aantal - 1, startstok, doelstok, tussenstok);

        doelstok.push(startstok.pop());

        console.log("start:", start, "tussen ", tussen, "eind: ", eind);

        hanoi(aantal - 1, tussenstok, startstok, doelstok);

    }


}

hanoi(start.length, start, tussen, eind);

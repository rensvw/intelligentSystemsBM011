// Opgave 1

function decreaseAndConquerSort(array) {
    let rij = array;
    if (rij.length <= 1) {
        console.log(rij);
        return rij;
    }
    else {
        let m = rij[rij.length - 1];

        let r = decreaseAndConquerSort(rij.slice(0, rij.length - 1));
        for (let i = 0; i < rij.length; i++) {

            if (m <= r[i]) {
                r.splice(i, 0, m);
                console.log(r);
                return r;
            }
        }
        r.push(m);
        console.log(r);
        return r;
    }
}

let rij = [5, 1, 3, 4, 6, 45, 2];
decreaseAndConquerSort(rij);
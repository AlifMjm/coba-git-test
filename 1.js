const umur = 15;
const jenisKursi = "PREMIUM";

let hargaTiket = 0;
let tambahanKursi = 0;

if (umur >= 18) {
    hargaTiket = 50000;
} else if (umur >= 12) {
    hargaTiket = 35000;
} else {
    hargaTiket = 25000;
}

switch (jenisKursi) {
    case "VIP":
        tambahanKursi = 20000;
        break;
    case "PREMIUM":
        tambahanKursi = 10000;
        break;
    case "REGULAR":
        tambahanKursi = 0;
        break;
}

const total = hargaTiket + tambahanKursi;

console.log("Total harga:", total);

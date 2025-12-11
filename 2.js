const belanja = 60000;
const metodePembayaran = "EWALLET";

let ongkosKirim = 0;
let biayaAdmin = 0;

if (belanja >= 100000) {
    ongkosKirim = 0;
} else if (belanja >= 50000) {
    ongkosKirim = 5000;
} else {
    ongkosKirim = 10000;
}

switch (metodePembayaran) {
    case "COD":
        biayaAdmin = 2000
        break;
    case "TRANSFER":
        biayaAdmin = 0
        break; 
    case "EWALLET":
        biayaAdmin = 1000;
        break; 
}

const total = ongkosKirim - biayaAdmin;
console.log(total);
let szam = Number(prompt("Add meg a kezdő értéket: "));
let vege = Number(prompt("Add meg az intervallum végét: "));

if (szam == 0 || vege == 0) {
    document.write("A kezdő érték nem lehet nulla!");
}
else {
    if (vege < szam || szam == vege) {
        document.write("A tartomány végének értéke nem lehet nagyobb vagy ugyan annyi mint a kezdő érték!");
    }
    else {
        for (let i = szam; i <= vege; i++) {
            if (i % 2 == 0) {
                document.write(i, ", ");
            }
        }
    }
}
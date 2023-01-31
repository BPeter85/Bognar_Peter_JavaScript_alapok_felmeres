let szam = Number(prompt("Add meg a számot: "));
let oszto = Number(prompt("Mennyivel akarod elosztani: "));

if(szam%oszto==0){
    document.write("Nulla a maradék.");
}
else{
    let maradek = szam%oszto;
    document.write(`Maradék: ${maradek} `);
}
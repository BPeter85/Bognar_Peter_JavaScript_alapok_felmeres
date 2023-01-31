let szam = Number(prompt("Add meg a számot amit hatványozni szeretnél: "));
let hatvany = Number(prompt(`A(z) ${szam} mennyivel akarod hatványozni: `));

document.write(`A(z) ${szam} a ${hatvany} hatvány értéke: ${Math.pow(szam,hatvany)}.`);
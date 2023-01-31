document.write("Az első 10 négyzetszám: <br> ");
let darab = 10;

for(let i = 0; i <= darab; i++) {
    let x = i * i;
    document.write(`${i}` + "<sup>2</sup>"+ `= ${x} <br>`);
}
let age = Number(prompt("Add meg, hogy hány éves vagy: "));

if (age == 0 || age >= 120) {
    document.write("Nem jó értéket adtál meg! ");
} else if (age < 6) {
    document.write("Kisgyermekkor: 0-6 év ");
} else if (age < 12) {
    document.write("Gyermekkor: 6-12 év ");
} else if (age < 16) {
    document.write("Serdülőkor: 12-16 év ");
} else if (age < 20) {
    document.write("Ifjúkor: 16-20 év ");
} else if (age < 30) {
    document.write("Fiatal felnőtt kor: 20-30 év ");
} else if (age < 60) {
    document.write("Felnőtt kor: 30-60 ");
} else if (age > 60) {
    document.write("Aggkor: 60-tól ");
}
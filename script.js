let a = +prompt("Qo'ylar sonini kiriting.")
while (isNaN(a) || a == 0) {
    a = +prompt("Qaytadan kiriting")
}
box = ""
for (let i = 1; i < a; i++) {
    if (i == 1) {
        box += i + ' qoy...'
    } else {
        box += i + ' qoylar...'
    }


}
console.log(box)
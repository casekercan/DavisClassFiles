var a = process.argv[2];
var b = parseInt(process.argv[3]);
var c = parseInt(process.argv[4]);


if (a === "add") {
    console.log(b + c);
}
if (a === "subtract") {
    console.log(b - c);
}
if (a === "multiply") {
    console.log(b * c);
}
if (a === "divide") {
    console.log(b / c);
}
if (a === "remainder") {
    console.log(b % c);
}
if (a === "exp") {
    console.log(Math.pow(b, c));
}



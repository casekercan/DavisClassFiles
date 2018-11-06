//input: 13... output: 6 + 12 = 18)

var sum = 0;
var input = (process.argv[2]);


for (i = 6; i <= input; i += 6) {
    sum += i;
}

console.log(sum);
// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var input = process.argv;
var sortArray = [];

for (var i = 2; i < input.length; i++) {
    sortArray.push(parseFloat(input[i]));
}

console.log(sortArray.sort(numSort));

function numSort(a, b) {
    return a - b;
}

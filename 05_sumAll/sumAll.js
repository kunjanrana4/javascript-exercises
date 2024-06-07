const sumAll = function(start, end) {
    if (typeof(start) != "number" || typeof(end) != "number" || start < 0 || end < 0) return "ERROR";
    if (start > end) [start, end] = [end, start];
    // below code iterates over each number and adds the sum
    // let sum = 0;
    // for (let i = start; i <= end; i++){
    //     sum += i;
    // }

    /* New formula solution
       below code finds the sum of numbers of series x + (x+1) + (x+2) + ...... + (x+n)
       It's a modified solution from formula 1 + 2 + 3 + ..... + n = (n * (n+1))/2
       Here, the sum of 1...(x-1) is subtracted from the sum of 1...n to find the sum of all numbers from x...n */
    let sum = (end * (end + 1)) / 2 - (start * (start - 1)) / 2;  
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

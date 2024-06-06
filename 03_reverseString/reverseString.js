const reverseString = function(word) {
    reverseArray = [];
    for (let pos = word.length-1; pos >= 0; pos--) {
        reverseArray.push(word[pos])
    }
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

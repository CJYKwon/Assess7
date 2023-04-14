// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

//addToZero([]);
// -> False

//addToZero([1]);
// -> False

//addToZero([1, 2, 3]);
// -> False

//addToZero([1, 2, 3, -2]);
// -> True

function addToZero(arr){
    const run = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(run[-num]) {
            return true;
        }run[num] = true;
    }return false;
}

// console.log(addToZero([]))
// console.log(addToZero([1]))
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))

//runtime: O(n)
//spacecomplexity: O(n)

//2) Unique Characters
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//For example:

//hasUniqueChars("Monday");
// -> True

//hasUniqueChars("Moonday");
// -> False

function hasUniqueChars(word) {
    const run = {};

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (run[char]) {
            return false;
        }run[char] = true;
    }return true;
}

// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Moonday"))

//runtime: O(n)
//spacecomplexity: O(n)

//3) Pangram Sentence
//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

//Write a function to check a sentence to see if it is a pangram or not.

//For example:

//isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

//isPangram("I like cats, but not mice");
// -> False

function isPangram(sentence) {
    const run = {};
    const runSentence = sentence.toLowerCase().replace(/[^a-z]/g,'');

    for (let i = 0; i < runSentence.length; i++) {
        const char = runSentence[i];
        run[char] = true;
    }

    for (let charCode = 97; charCode <= 122; charCode++) {
        const char = String.fromCharCode(charCode);
        if(!run[char]) {
            return false;
        }
    }return true;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))

//runtime: O(n)
//spacecomplexity: O(1)

//4) Longest Word
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

//For example:

//findLongestWord(["hi", "hello"]);
// -> 5

function find_longest_word(words) {
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }return longestLength;
}

console.log(find_longest_word(["hi", "hello"]))

//runtime: O(n)
//spacecomplexity: O(1)
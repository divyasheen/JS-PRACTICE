// Write a function that reverses all the words in a sentence that start with a particular letter.Example:

// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"


function specialReverse(s, c) {
    return s.split(' ').map(w => w[0] === c ? w.split('').reverse().join('') : w).join(' ')
}


console.log(specialReverse("word searches are super fun", "s")); // ➞ "word sehcraes are repus fun"

console.log(specialReverse("SHEEN SIMON", "S")); // ➞ "NEEHS NOMIS"
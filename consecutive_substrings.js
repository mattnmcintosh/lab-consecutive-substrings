function consecutiveSubstrings(string) {
  const theSubstrings = [];
  const sLength = string.length;
  for (let i = 0; i < sLength; i++) {
    for (let j = i + 1; j <= sLength; j++) {
      theSubstrings.push(string.slice(i, j));
    }
  }
  return theSubstrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;



function repeatedWord(str) {
  const words = str.toLowerCase().split(/\W+/);
  const wordCount = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (wordCount[word]) {
      return word;
    }
    wordCount[word] = true;
  }

  return "No repeated word found";
}

module.exports = repeatedWord;

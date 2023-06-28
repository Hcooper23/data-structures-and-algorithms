const repeatedWord = require('./hashmap-repeated-word');

// Test cases
describe('repeatedWord', () => {
  it('should return the first repeated word in the string', () => {
    const str = "Once upon a time, there was a brave princess who...";
    const result = repeatedWord(str);
    expect(result).toBe("a");
  });

  it('should handle multiple occurrences of the repeated word', () => {
    const str = "It was the best of times,

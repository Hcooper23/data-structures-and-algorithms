# hashmap repeated word

## Features

- Write a function called repeated word that finds the first word to occur more than once in a string
- Arguments: string
- Return: string

## Structure and Testing
Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

## Whiteboard Process

![Whiteboard Process](./assets/Screenshot%202023-05-30%20at%205.13.30%20PM.png)

## Approach & Efficiency

## Solution
<!-- function repeatedWord(str) {
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

module.exports = repeatedWord; -->

### Collaborators

Worked with Class 401D53

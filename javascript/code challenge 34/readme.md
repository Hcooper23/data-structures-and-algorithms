# Code Challenge 34

## Features

Ask the candidate to write a function that will determine if the given string is full of unique characters.
We can assume that spaces don’t count, and the characters are not case sensitive (i.e. “A” is the same as “a”).
The most efficient solution is going to use a Hashmap. The candidate should iterate through the string. and for each of the characters put them in the Hashset, if the value already exists, they can return false as soon as a duplicate occurs.
We can assume they have a Hashset readily available (they do not have to implement one).

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-06-30%20at%209.29.28%20PM.png)

## Approach & Efficiency

## Solution

<!-- function isUniqueString(string) {
  string = string.toLowerCase();
  let encounteredChars = new Set();

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char === ' ') {
      continue;
    }

    if (encounteredChars.has(char)) {
      return false;
    }

    encounteredChars.add(char);
  }

  return true;
} -->
### Collaborators

Worked with Class 401D53

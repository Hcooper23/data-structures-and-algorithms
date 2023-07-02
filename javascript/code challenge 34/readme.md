# Code Challenge 34

## Features

Ask the candidate to write a function that will determine if the given string is full of unique characters.
We can assume that spaces don’t count, and the characters are not case sensitive (i.e. “A” is the same as “a”).
The most efficient solution is going to use a Hashmap. The candidate should iterate through the string. and for each of the characters put them in the Hashset, if the value already exists, they can return false as soon as a duplicate occurs.
We can assume they have a Hashset readily available (they do not have to implement one).

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-07-01%20at%208.34.25%20PM.png)

## How it went

I completed this in two sections first being base and timed at 45 mins and that went well, had issues with the code section. But first issue came with the problem was seeing how it was needing to be explained or how to complete the task without having a partner to develop a understanding of what was happening. Based on the figuring out what was needed to explain and how my brain was able to understand this and the best way to explain it become clearly understandable. But after this was done i completed the rest of it with more time and additional help from AI for developing test and helping with better breakdowns and understanding.

This was cleared by Ryan Gallaway to complete this alone due to family issues going on.

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

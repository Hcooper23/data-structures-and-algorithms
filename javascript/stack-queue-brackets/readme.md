## Challenge Title

Write a function called validate brackets that returns a value of true or false based on whether the input string of brackets is balanced

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-06-01%20at%205.20.39%20PM.png)

## Approach & Efficiency

1. Initialize an empty stack.
2. Create two arrays, openingBrackets containing all opening brackets and closingBrackets containing all closing brackets.
3. Iterate over each character, char, in the inputString.

- If char is an opening bracket (exists in openingBrackets array), push it onto the stack.
- If char is a closing bracket (exists in closingBrackets array):
- If the stack is empty, return false as there is no matching opening bracket.
- Pop the top element, top, from the stack.
- Check if top and char form a matching pair of brackets. If not, return false.

4. After iterating through all characters in the inputString, check if the stack is empty.

- If the stack is empty, return true as all brackets are balanced.
- If the stack is not empty, return false as there are unmatched opening brackets.

## Solution

<!-- const validateBrackets = (brackets) => {
  let stack = [];
  let openingBrackets = ['{', '[', '('];
  let closingBrackets = ['}', ']', ')'];

  for (let i = 0; i < brackets.length; i++) {
    let current = brackets[i];

    if (openingBrackets.includes(current)) {
      stack.push(current);
    } else if (closingBrackets.includes(current)) {
      if (stack.length === 0) {
        return false;
      }
      let top = stack.pop();
      let bracketIndex = closingBrackets.indexOf(current);

      if (top !== openingBrackets[bracketIndex]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}; -->

### Collaborators

Worked with Ethan Storm

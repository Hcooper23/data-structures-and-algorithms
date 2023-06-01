const validateBrackets = (brackets) => {
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
};


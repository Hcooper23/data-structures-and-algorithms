
function isUniqueString(string) {
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
}

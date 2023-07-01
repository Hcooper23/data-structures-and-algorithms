// Test Case 1: All unique characters
console.log(isUniqueString("abcdefg")); // Output: true

// Test Case 2: Duplicate characters
console.log(isUniqueString("hello")); // Output: false

// Test Case 3: Mixed case characters with duplicates
console.log(isUniqueString("AbCDeFg")); // Output: false

// Test Case 4: String with spaces
console.log(isUniqueString("a b c d")); // Output: true

// Test Case 5: Empty string
console.log(isUniqueString("")); // Output: true

// Test Case 6: String with all same characters
console.log(isUniqueString("aaaaa")); // Output: false

// Test Case 7: String with special characters
console.log(isUniqueString("!@#$%^&*()")); // Output: true

// Test Case 8: String with mixed characters and duplicates
console.log(isUniqueString("abcABC123")); // Output: true

// Test cases
const testCases = [
  { brackets: "([])", expected: true },
  { brackets: "({[]})", expected: true },
  { brackets: "{[()]}", expected: true },
  { brackets: "", expected: true }, // empty string
  { brackets: "{[}", expected: false },
  { brackets: "[{]}", expected: false },
  { brackets: "(]", expected: false },
  { brackets: "({[}])", expected: false },
  { brackets: "]", expected: false },
];

// Function to run the test cases
const runTests = () => {
  for (let i = 0; i < testCases.length; i++) {
    const { brackets, expected } = testCases[i];
    const result = validateBrackets(brackets);
    console.log(`Test Case ${i + 1}:`);
    console.log(`Input: ${brackets}`);
    console.log(`Expected Output: ${expected}`);
    console.log(`Actual Output: ${result}`);
    console.log(`Result: ${result === expected ? "PASS" : "FAIL"}`);
    console.log("-----------------------------");
  }
};

// Run the test cases
runTests();

# Hashmap Left Join

## Features

Write a function that LEFT JOINs two hashmaps into a single data structure.

- Write a function called left join
- Arguments: two hash maps
  - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
  - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
- Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

NOTES:

- Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
- LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
- If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Write at least three test assertions for each method that you define.

Ensure your tests are passing before you submit your solution.

## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-07-02%20at%207.43.26%20PM.png)

## Approach & Efficiency

## Solution
<!-- function leftJoin(hashmap1, hashmap2) {
  let results = [];

  for (let key in hashmap1) {
    let row = [];

    row.push(key);
    row.push(hashmap1[key]);

    if (hashmap2.hasOwnProperty(key)) {
      row.push(hashmap2[key]);
    } else {
      row.push(null);
    }

    results.push(row);
  }

  return results;
} -->

### Collaborators

Worked with Class 401D53

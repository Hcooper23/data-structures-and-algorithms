# Hash Tables

## Features

Implement a Hashtable Class with the following methods:

- set
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.

- get
  - Arguments: key
  - Returns: Value associated with that key in the table

- has
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.

- keys
  - Returns: Collection of keys

- hash
  - Arguments: key
  - Returns: Index in the collection for that key

## Structure and Testing

Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

Any exceptions or errors that come from your code should be contextual, descriptive, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom error that describes what went wrong in calling the methods you wrote for this lab.

Write tests to prove the following functionality:

  1. Setting a key/value to your hashtable results in the value being in the data structure
  2. Retrieving based on a key returns the value stored
  3. Successfully returns null for a key that does not exist in the hashtable
  4. Successfully returns a list of all unique keys that exist in the hashtable
  5. Successfully handle a collision within the hashtable
  6. Successfully retrieve a value from a bucket within the hashtable that has a collision
  7. Successfully hash a key to an in-range value

Ensure your tests are passing before you submit your solution.

## Whiteboard Process

![Whiteboard Process](./assets/Screenshot%202023-05-30%20at%205.13.30%20PM.png)

## Approach & Efficiency

## Solution
<!-- class HashTable {
  constructor(size = 100) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value; // Update the value if key already exists
        return;
      }
    }

    this.table[index].push([key, value]); // Add new key-value pair
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return null; // Key does not exist
    }

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1]; // Return the value associated with the key
      }
    }

    return null; // Key does not exist
  }

  has(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return false; // Key does not exist
    }

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return true; // Key exists
      }
    }

    return false; // Key does not exist
  }

  keys() {
    const keys = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          keys.push(pair[0]); // Add key to the list
        }
      }
    }
    return [...new Set(keys)]; // Return unique keys
  }
}

module.exports = HashTable; -->

### Collaborators

Worked with Class 401D53

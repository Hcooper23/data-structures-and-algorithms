const HashTable = require('./hashtable');

// Test set method
test('Setting a key/value to the hashtable should store the value', () => {
  const hashtable = new HashTable();
  hashtable.set("name", "John");
  expect(hashtable.get("name")).toBe("John");
});

// Test get method with a non-existing key
test('Retrieving a non-existing key should return null', () => {
  const hashtable = new HashTable();
  expect(hashtable.get("address")).toBeNull();
});

// Test has method
test('Checking if a key exists in the hashtable should return the correct boolean value', () => {
  const hashtable = new HashTable();
  hashtable.set("name", "John");
  expect(hashtable.has("name")).toBe(true);
  expect(hashtable.has("address")).toBe(false);
});

// Test keys method
test('Retrieving all unique keys from the hashtable should return the correct collection', () => {
  const hashtable = new HashTable();
  hashtable.set("name", "John");
  hashtable.set("age", 30);
  hashtable.set("email", "john@example.com");
  expect(hashtable.keys()).toEqual(['name', 'age', 'email']);
});

// Test collision handling
test('Retrieving a value from a bucket with a collision should return the correct value', () => {
  const hashtable = new HashTable();
  hashtable.set("dog", "Luna");
  hashtable.set("god", "Zeus");
  expect(hashtable.get("dog")).toBe("Luna");
  expect(hashtable.get("god")).toBe("Zeus");
});

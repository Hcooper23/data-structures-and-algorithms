class HashTable {
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

module.exports = HashTable;

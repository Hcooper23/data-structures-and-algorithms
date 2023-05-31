// Create an instance of the AnimalShelter class
const animalShelter = new AnimalShelter();

// Test Case 1: Enqueue a dog and dequeue it
const dog = { species: "dog", name: "Buddy" };
animalShelter.enqueue(dog);
const dequeuedDog = animalShelter.dequeue("dog");
console.log(dequeuedDog); // Expected: { species: "dog", name: "Buddy" }

// Test Case 2: Enqueue a cat and dequeue it
const cat = { species: "cat", name: "Whiskers" };
animalShelter.enqueue(cat);
const dequeuedCat = animalShelter.dequeue("cat");
console.log(dequeuedCat); // Expected: { species: "cat", name: "Whiskers" }

// Test Case 3: Enqueue both a dog and a cat, and dequeue based on preference
const dog2 = { species: "dog", name: "Max" };
const cat2 = { species: "cat", name: "Fluffy" };
animalShelter.enqueue(dog2);
animalShelter.enqueue(cat2);
const dequeuedDog2 = animalShelter.dequeue("dog");
const dequeuedCat2 = animalShelter.dequeue("cat");
console.log(dequeuedDog2); // Expected: { species: "dog", name: "Max" }
console.log(dequeuedCat2); // Expected: { species: "cat", name: "Fluffy" }

// Test Case 4: Enqueue an invalid animal species
const invalidAnimal = { species: "rabbit", name: "Hoppy" };
try {
  animalShelter.enqueue(invalidAnimal);
} catch (error) {
  console.log(error); // Expected: Error object
}

// Test Case 5: Dequeue from an empty queue
const emptyDequeue = animalShelter.dequeue("dog");
console.log(emptyDequeue); // Expected: undefined or null

// Additional test cases as needed


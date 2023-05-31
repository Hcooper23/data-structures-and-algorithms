## Challenge Title
Create Animal shelter class with the following methods:

- dequeue
  - Arguments: pref
    - pref can be either "dog" or "cat"
  - Return: either a dog or a cat, based on preference.
    - If pref is not "dog" or "cat" then return null.

- enqueue
  - Arguments: animal
    - animal can be either a dog or a cat object.
    - It must have a species property that is either "cat" or "dog"
    - It must have a name property that is a string.


## Whiteboard Process

![Whiteboard Process](./Screenshot%202023-05-31%20at%205.55.21%20PM.png)

## Approach & Efficiency

- Create an animal shelter class
- Create an animal class with species property(cat or dog)
- Push to appropriate queue based on species
- Based on preference pop off animal


## Solution

<!-- enqueue(animal) {
  if (animal.species !== 'dog' && animal.species !== 'cat') {
    throw new Error('Invalid animal species');
  } else if (animal.species === "dog") {
    dogQ.push(animal);
  } else {
    catQ.push(animal);
  }
};

dequeue(preference) {
  if (preference === 'dog') {
    return dogQ.pop();
  } else if (preference === 'cat') {
    return catQ.pop();
  } else {
    return null;
  }
}; -->

### Collaborators

Worked with Justin Mathieu

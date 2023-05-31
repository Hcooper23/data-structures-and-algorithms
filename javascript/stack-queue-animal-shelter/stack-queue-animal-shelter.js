enqueue(animal) {
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
};

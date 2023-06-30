function leftJoin(hashmap1, hashmap2) {
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
}

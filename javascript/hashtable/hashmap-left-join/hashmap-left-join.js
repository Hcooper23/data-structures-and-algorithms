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

let synonyms = {
  diligent: "employed",
  fond: "enamored",
  guide: "usher",
  outfit: "garb",
  wrath: "anger"
};

let antonyms = {
  diligent: "idle",
  fond: "averse",
  guide: "follow",
  flow: "jam",
  wrath: "delight"
};

let result = leftJoin(synonyms, antonyms);
console.log(result);

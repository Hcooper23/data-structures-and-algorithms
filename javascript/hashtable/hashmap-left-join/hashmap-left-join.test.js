let synonyms = {
  "diligent": "employed",
  "fond": "enamored",
  "guide": "usher",
  "outfit": "garb",
  "wrath": "anger"
};

let antonyms = {
  "diligent": "idle",
  "fond": "averse",
  "guide": "follow",
  "flow": "jam",
  "wrath": "delight"
};

let result = leftJoin(synonyms, antonyms);
console.log(result);

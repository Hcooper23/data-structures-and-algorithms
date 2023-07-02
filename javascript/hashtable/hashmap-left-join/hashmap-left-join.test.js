const assert = require('assert');
const request = require('supertest');
const app = require('./hashmap-left-join');

describe('API Tests', () => {
  it('should return the left join of two hashmaps', (done) => {
    const synonyms = {
      diligent: 'employed',
      fond: 'enamored',
      guide: 'usher',
      outfit: 'garb',
      wrath: 'anger',
    };

    const antonyms = {
      diligent: 'idle',
      fond: 'averse',
      guide: 'follow',
      flow: 'jam',
      wrath: 'delight',
    };

    const expected = [
      ['diligent', 'employed', 'idle'],
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['outfit', 'garb', null],
      ['wrath', 'anger', 'delight'],
    ];

    request(app)
      .post('/api/left-join')
      .send({ synonyms, antonyms })
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        assert.deepStrictEqual(res.body, expected);
        done();
      });
  });
});


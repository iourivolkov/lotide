const assert = require('chai').assert;
const middle = require('../middle');


describe("#middle", () => {

  it("returns ['2'] for ['1', '2', '3']", () => {
    assert.deepEqual(middle(['1', '2', '3']), ['2']); 
  });
  it("returns 'lighthouse' for ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(middle(['hello', 'lighthouse', 'labs']), ['lighthouse']);

  }

)});







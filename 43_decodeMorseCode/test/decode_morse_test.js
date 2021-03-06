let chai = require('chai');
let assert = chai.assert;
let decodeMorse = require('../decode_morse');

describe('Decode Morse Code', () => {
  it('translates a string of morse code', () => {
    assert.equal(decodeMorse('.... . -.-- / .--- ..- -.. .'), 'HEY JUDE');
    assert.equal(decodeMorse('.... . .-.. .-.. --- / .-- --- .-. .-.. -..'), 'HELLO WORLD');
    assert.equal(decodeMorse('.. -. -.. .. ...- .. -.. ..- .- .-.. ... / .- -. -.. / .. -. - . .-. .- -.-. - .. --- -. ... / --- ...- . .-. / .--. .-. --- -.-. . ... ... . ... / .- -. -.. / - --- --- .-.. ...'),'INDIVIDUALS AND INTERACTIONS OVER PROCESSES AND TOOLS');
  })
});

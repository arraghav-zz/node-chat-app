var expect = require ('expect');

var {generateMessage} = require ('./message');

describe('generateMessage', () => {
  it ('should generate correct message object', () => {
    var from = 'Sender';
    var text = 'Some Message';

    var message = generateMessage(from, text);
    expect (message.createdAt).toBeTruthy();
    expect (message).toHaveProperty('from', from);
    expect (message).toHaveProperty('text', text);
  })
});


exports.seed = function(knex) {
  return knex('message').del()
    .then(function () {
      return knex('message').insert([
        {sender: 2, receiver: 3, message_body: 'hey  ', has_been_read: false},
        {sender: 2, receiver: 3, message_body: 'these are test messages2', has_been_read: false},
        {sender: 2, receiver: 4, message_body: 'these are test messages2', has_been_read: false},
        {sender: 2, receiver: 4, message_body: 'these are test messages2', has_been_read: false},
        {sender: 3, receiver: 2, message_body: 'these are test messages3', has_been_read: true},
        {sender: 3, receiver: 2, message_body: 'these are test messages4', has_been_read: true},
        {sender: 4, receiver: 4, message_body: 'these are test messages5', has_been_read: true},
        {sender: 4, receiver: 3, message_body: 'these are test messages6', has_been_read: true},
        {sender: 4, receiver: 2, message_body: 'these are test messages6', has_been_read: true},
      ]);
    });
};


exports.seed = function(knex) {
  return knex('message').del()
    .then(function () {
      return knex('message').insert([
        {sender: 3, receiver: 2, message_body: 'hey stacey, I saw your monitor for sale and I am very interested. is your price flexible?', has_been_read: true},
        {sender: 2, receiver: 3, message_body: 'hi zipps, actually its not. but I can get it to you today if you are ok with that', has_been_read: false}
      ]);
    });
};

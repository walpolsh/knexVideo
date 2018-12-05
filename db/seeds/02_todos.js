exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {
          title: 'go to store for milk',
        },
        {
          title: 'walk the dog',
        },
        {
          title: 'go to the gym',
        },
        {
          title: 'stop the damn leafblowers outside',
        },
        {
          title: 'get the mail',
        },
        {
          title: 'get some headphones',
        },
      ]);
    });
};

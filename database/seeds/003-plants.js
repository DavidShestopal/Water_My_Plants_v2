exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          id: 1,
          nickname: 'Fred',
          species_id: 1,
          location: 'living room',
          user_id: 1,
          created: Date(Date.now()).toString(),
        },
        {
          id: 2,
          nickname: 'James',
          species_id: 2,
          location: 'bedroom',
          user_id: 1,
          created: Date(Date.now()).toString(),
        },
        {
          id: 3,
          nickname: 'Jeff',
          species_id: 3,
          location: 'bathroom',
          user_id: 2,
          created: Date(Date.now()).toString(),
        },
        {
          id: 4,
          nickname: 'Betty',
          species_id: 3,
          location: 'living room',
          user_id: 3,
          created: Date(Date.now()),
        },
      ]);
    });
};

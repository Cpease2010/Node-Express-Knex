
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohort').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {
          firstName: 'Cory',
          lastName: 'Pease',
          hometown: 'Denver',
          prevOccupation: 'Boss',
          favoriteNum: 34.5,
          pastime: 'Being Bald'
        },
        {
          firstName: 'Maddie', 
          lastName: 'Kreamer',
          hometown: 'Des Moines, IA', 
          prevOccupation: 'Server/Bartender',
          favoriteNum: 7, 
          pastime: 'Backpacking'
      }
      ]);
    });
};

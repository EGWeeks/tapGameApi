
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({email: 'jared@mathews.com', password: 'jm', user_name: 'JAM', high_score: 3000}),
    knex('users').insert({email: 'jeremy@roelfs.com', password: 'jr', user_name: 'JAR', high_score: 5}),
    knex('users').insert({email: 'jordan@mathews.com', password: 'jm', user_name: 'JMM', high_score: 0})
  );
};

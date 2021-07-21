const db = require('./db')
const Query = {
  test: () => "Test Success, GraphQL server is up & running !!",
  greeting: () => 'hello from TutorialsPoint !!!',
  students: () => db.students.list()
};

module.exports = { Query };

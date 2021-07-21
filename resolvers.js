const db = require("./db");
const Query = {
  students: () => db.students.list(),
  studentById: (root, args, context, info) => {
    return db.students.get(args.id);
  },
  sayHello: (root, args, context, info) =>
    `Hi ${args.name} GraphQL server says Hello to you !!`,
  setFavoriteColor: (root, args) => {
    return "Your Fav Color is : " + args.color;
  },
};

const Student = {
  fullName: (root, args, context, info) => {
    return `${root.firstName}:${root.lastName}`;
  },
  college: (root) => {
    return db.colleges.get(root.collegeId);
  },
};

module.exports = { Query, Student };

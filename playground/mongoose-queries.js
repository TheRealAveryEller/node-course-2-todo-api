const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
const { ObjectID } = require('mongodb');

// var id = '59a42a76e1769d54025d14c6';

// if (!ObjectID.isValid(id)) {
//     console.log('That is an Invalid Id');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('None Found');
//     }
//     console.log('Todo by ID: ', todo);
// }).catch((e) => {
//     console.log(e)
// });

var userId = '59a075a83ccafc803be50949';

User.findById(userId).then((user) => {
    //Query Works, no User
    if(!user) {
        return console.log('User Not Found');
    }
    //Query Works, print user
    console.log('User:', user);
}).catch((e) => {
    console.log(e);
})
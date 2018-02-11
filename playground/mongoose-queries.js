 const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a808765f0af0fa9837642b5';
// var id = '6a808765f0af0fa9837642b5';
// var id = '456a808765f0af0fa9837642b5';

// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid');
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
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '5a7fb9d269216b2c7caa42aa';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User By Id', user);
}).catch((e) => console.log(e));
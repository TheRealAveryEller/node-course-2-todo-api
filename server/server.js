var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: ' Edit all of the crap                    '
// });

// newTodo.save().then(
//     doc => console.log('Save was a success!', JSON.stringify(doc, undefined, 2)),
//     // err => console.log('Save failed', err)
//     err => {
//         console.log('Error:', err.errors.text.name)
//         console.log('Description: ', err.errors.text.message)
//     }
// );

// User 
// email - required|trimmed|string|min-length: 1
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

var newUser = new User({
    // email: 'j.eller1011@gmail.com'
});

newUser.save()
    .then(
        doc => console.log('New User:', JSON.stringify(doc, undefined, 2)),
        err => {
            // console.log(err);
            console.log('Error:', err.message);
            // console.log('Description: ', err.errors.text.message);
        }
    );
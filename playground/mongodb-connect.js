// const MongoClient = require('mongodb').MongoClient;
// const { MongoClient } = require('mongodb'); // Identical to prior statement by means of Object Destructuring
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Avery Eller', age: 28};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server!');

    // Insert new doc into Todos (text, completed)
    // db.collection('Todos')
    //     .insertOne({
    //             text: 'Something to do',
    //             completed: false
    //         },
    //         (err, result) => {
    //             if (err) {
    //                 return console.log('Unable to Insert Record', err);
    //             }
    //             console.log(JSON.stringify(result.ops, undefined, 2));
    //         }
    //     );

    // Insert new doc into Users (name, age, location)
    // db.collection('Users')
    //     .insertOne({
    //             name: 'Avery Eller',
    //             age: 28,
    //             location: 'Work'
    //         },
    //         (err, result) => {
    //             if (err) {
    //                 return console.log('Unable to Insert Record', err);
    //             }
    //             console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    //         }
    //     );

    db.close();
});
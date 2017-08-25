const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server!');

    // db.collection('Todos').findOneAndUpdate(
    //     { text: 'eat lunch' }, 
    //     { completed: false }
    // )
    // .then(
    //     result => console.log(result)
    // );

    // db.collection('Todos').findOneAndUpdate(
    //     { _id: new ObjectID('59a051200a32e7f961a5f879') }, 
    //     { $set: { completed: true } }, 
    //     { returnOriginal: false }
    // )
    // .then(
    //     result => console.log(result)
    // );

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('59a0428d7541ab21e8bf0056') },
        { 
            $set: { name: 'Fart Tester' }, 
            $inc: { age: +1 } 
        },
        { returnOriginal: false }
    )
    .then(
        result => console.log(result)
    );

    // db.close();
});
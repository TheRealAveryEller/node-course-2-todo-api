const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server!');

    // db.collection('Todos').find({ 
    //     _id: new ObjectID('59a03f4a70a3d740dc65cd48')
    // }).toArray()
    //     .then(
    //         (docs) => {
    //             console.log('Todos');
    //             console.log(JSON.stringify(docs, undefined, 2));
    //         },
    //         (err) => {
    //             console.log('Unable to fetch', err);
    //         }            
    //     )

    // db.collection('Todos').find().count()
    //     .then(
    //         (count) => {
    //             console.log(`Todos count: ${count}`);
    //         },
    //         (err) => {
    //             console.log('Unable to fetch', err);
    //         }            
    //     )

    db.collection('Users').find({name: 'Avery Eller'}).toArray()
        .then(
            (docs) => {
                console.log('Users');
                console.log(JSON.stringify(docs, undefined, 2));
            },
            (err) => {
                console.log('Unable to fetch data: ', err);
            }
        )

    // db.close();
});
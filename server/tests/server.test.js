const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

// beforeEach(
//     (done) => {
//         Todo.remove({})
//             .then(
//                 () => done()
//             );
//     }
// );

beforeEach((done) => {
    Todo.remove({}).then(() => {
        done();
    })
});

describe('POST /todos', () => {
    it('Should Create A New Todo', (done) => {
        var text = 'Test Value For Todo.text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('Should Not Create A Todo With Invalid Body Data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(0);
                    done();
                }).catch((e) => done(e))
            })
    });
});

// describe('POST /todos', () => {
//     it('Should create a new todo', (done) => {
//         var text = 'Test todo Text';

//         request(app)
//             .post('/todos')
//             .send({text})
//             .status(200)
//             .expect((res) => {
//                 expect(res.body.text).toBe(text);
//             })
//             .end((err, res) => {
//                 if (err) {
//                     return done(err);
//                 }
                
//                 Todo.find()
//                     .then(
//                         (todos) => {
//                             expect(todos.length).toBe(1);
//                             expect(todos[0].text).toBe(text);
//                             done();
//                         }
//                     )
//                     .catch(
//                         (err) => {done(err);}
//                     )
//             });
//     });
// });
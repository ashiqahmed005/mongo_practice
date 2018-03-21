const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mongodb_practice')
before((done) =>{
    mongoose.connection
    .once('open', () => done())
    .on('error',(error) => {
        console.error('error happening here', error)
    });
})

beforeEach((done) =>{
    mongoose.connection.collections.departments.drop(function(){
        done();
    });
});    
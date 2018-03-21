const assert  = require('assert');
const Department = require('../src/department');
describe('Updating the department', () => {
    let IT;
    beforeEach((done) => {
        IT = new Department({name: 'IT'});
        IT.save()
        .then(() => done())
    });
    
    function assertname(operation, done){
        operation
        .then(()=> Department.find({}))
        .then((departments) =>{
            console.log(departments[0]._id);
            //console.log(IT._id);
            assert(departments[0].name === 'Accounting');
            done();
        });

    }
    it('Instance of Department set and save', (done) => {
        IT.set('name', 'Accounting')
        assertname(IT.save(), done);
        
    });  

    it('instance of department by using update ', (done) =>{
      assertname(IT.update({name: 'Accounting'}), done);
    });
    it('update all department by using class update and find criteria', (done) =>{
        assertname(Department.update({name: 'IT'},{name: 'Accounting'}), done);
    });
    it('update one department by using findById class update', (done) =>{
        assertname(Department.findByIdAndUpdate(IT._id,{name: 'Accounting'}), done);
    });
    it('update one department by using findOneAndUpdate class update', (done) =>{
        assertname(Department.findOneAndUpdate({name: 'IT'},{name: 'Accounting'}), done);
    });   
});
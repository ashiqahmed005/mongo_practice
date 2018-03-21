const assert  = require('assert');
const Department = require('../src/department');
describe('creating record test', () => {
    it('save a department', (done) =>{
        let IT = new Department({name: 'IT'});
        //console.log(IT);
        IT.save()
        .then(() =>{
            assert(!IT.isNew);
            done();
        })
    })
});
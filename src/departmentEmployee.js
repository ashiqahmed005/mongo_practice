const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deptEmpSchema = new Schema({
    employeeNumber : {
        type: Schema.Types.ObjectId,
        ref: 'employee'
   },
   departmentNumber : {
    type: Schema.Types.ObjectId,
    ref: 'department'
},
    fromDate: {
      type: Date
      //required: true
    },
    toDate: {
        type: Date,
        default: Date.now
        //required: true
      }
    
  });
const DepartmentEmployee = mongoose.model('departmentEmployee', deptEmpSchema);  

module.exports = DepartmentEmployee;
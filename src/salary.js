const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({
    employeeNumber : {
        type: Schema.Types.ObjectId,
        ref: 'employee'
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
const Salary = mongoose.model('salary', salarySchema);  

module.exports = Salary;
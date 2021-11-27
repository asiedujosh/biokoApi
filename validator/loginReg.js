const Validator = require('validator')
const isEmpty = require('./is_empty.js')

module.exports = function validateData (data){
    let errors = {}
    data.accountNo = !isEmpty(data.accountNo) ? data.accountNo : ""
    data.password = !isEmpty(data.password) ? data.password : ""

    if(Validator.isEmpty(data.accountNo)){
        errors.accountNo = "Account Number is required"
    }

    if(Validator.isEmpty(data.password)){
        errors.password = "Password is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

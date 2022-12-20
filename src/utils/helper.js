//only letters and digits with at least one letter and at least one digit
export const onlyLettersAndDigitValidation=(value)=>{
   const isValid= /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/.test(value)
   if(isValid){
    return true
   }
   return false
}
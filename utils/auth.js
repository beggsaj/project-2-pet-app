const Joi = require('joi')
  
//User-defined function to validate the user
function validateUser(user)
{
    const JoiSchema = Joi.object({
      
        username: Joi.string()
                  .min(5)
                  .max(30)
                  .required(),
                    
        email: Joi.string()
               .email()
               .min(5)
               .max(50)
               .optional(), 
    
    }).options({ abortEarly: false });
  
    return JoiSchema.validate(user)
}
  
const user = {
    username: 'Pritish',
    email: 'pritish@gmail.com'
}
  
response = validateUser(user)
  
if(response.error)
{  
    console.log(response.error.details)
}
else
{
    console.log("Validated Data")
}

module.exports = Joi;
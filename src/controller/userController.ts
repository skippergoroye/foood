import { Request, Response } from 'express';
import { registerSchema, option, GeneralSalt, GeneratePassword} from '../utils/utility';  


export const Register = async (req: Request, res:Response)=> {
    try {
        const { email, phone, password, confirm_password } = req.body

        const validateResult = registerSchema.validate(req.body,option)
        if(validateResult.error){
            // console.log(validateResult.error.details)

            return res.status(400).json({
                Error:validateResult.error.details[0].message
            })
        }

        // Generate salt
        const salt = await GeneralSalt();
        const userPassword = await GeneratePassword(password, salt)


        console.log(userPassword)

    } catch (error) {
        res.status(500).json({
            Error:"Internal server Error",
            route:"/users/signup"
        })
    }
}



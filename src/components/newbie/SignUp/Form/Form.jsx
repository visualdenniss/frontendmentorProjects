import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {motion, AnimatePresence} from 'framer-motion'
import { errorSignProps, errorParagraphProps } from '../animations/animationProps';
import './Form.css'

const formFields = [
    {
        labelText : "First Name", 
        name : "first-name", 
        type: "text",
        register: "firstName"
    }, 
    {
        labelText : "Last Name", 
        name : "last-name", 
        type: "text",
        register: "lastName"
    }, 
    {
        labelText : "Email", 
        name : "email", 
        type: "text",
        register: "email"
    }, 
    {
        labelText : "Password", 
        name : "password", 
        type: "password",
        register: "password"
    }, 
]

const Form = ({setIsOpen, setName, setOpenToS}) => {
    
    
    const schema = yup.object().shape({
        firstName: yup.string().required("First Name cannot be empty"),
        lastName: yup.string().required("Last Name cannot be empty"),
        email: yup
            .string()
            .email("Looks like this is not an email")
            .required("Email cannot be empty"),
        password: yup
            .string()
            .min(4, "Password must be at least 4 characters long")
            .max(20, "Password cannot be longer than 20 characters")
            .required("Password cannot be empty"),
    })
    
    const {register, handleSubmit, formState: {errors} , reset } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        setName(data.firstName)
        setIsOpen(true)
        reset({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='signup-form'>

            {formFields.map((field)=> (
                <>
                <div className="signup-field">
                <input 
                    type={field.type} 
                    id={field.name} 
                    aria-invalid={errors[field.register] ? "true" :  "false"} 
                    aria-describedby={field.register}
                    name={field.name} 
                    placeholder={field.labelText} 
                    autoComplete="off"
                    defaultValue=""
                    {...register(`${field.register}`)}/>
                <label for="first-name" className="signup-field-label-wrapper">
                    <span className="signup-field-label-text">
                        {field.labelText}
                    </span>
                </label>
                <AnimatePresence>
                    {errors[field.register] && 
                    <motion.div {...errorSignProps}
                    className="signup-error-sign">!</motion.div>
                    }
                </AnimatePresence>
                </div>
                
                <AnimatePresence>
                    {errors[field.register] &&
                        <motion.div 
                        {...errorParagraphProps}
                        className="signup-error-container">
                            <p className='signup-error-message'>
                                <span role="alert">{errors[field.register].message}</span>
                            </p>
                        </motion.div>
                        }
                </AnimatePresence>
                
                </>
            ))} 
            <input type="submit" value="Claim your free trial" />
        </form>
    )
}

export default Form

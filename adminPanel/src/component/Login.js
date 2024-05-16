import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications';
import { loginEndpoint } from '../helper/endpoints';
import { useNavigate } from "react-router-dom";
import { postApiDataFORM } from '../helper/apiHelper';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const { addToast } = useToasts();

    const loginFormSubmit = async (data) => {
        try {

            const formData = new FormData();

            formData.append('username', data.username);
            formData.append('password', data.password);

            const response = await postApiDataFORM(loginEndpoint, formData);

            console.log("response", response)

            if (response.status === 200) {
                addToast("Login Successfully!!", { appearance: "success", autoDismiss: 2000 });
                localStorage.setItem('token', response.data.access_token)
                navigate('/dashboard')
            }
            return response;

        } catch (err) {
            console.log('Error in handle Login Function', err);
        }
    }





    return (
        <div className='loginPageMain'>
            <div className='loginPageFlexLeft'>
                <img className='left_img_login' src='./assets/img/undraw_login_re_4vu2.svg' alt="Login Illustration" />
            </div>
            <div className='loginPageFlexRight'>
                <form className='formData' onSubmit={handleSubmit(loginFormSubmit)}>
                    <label className='lableLogin'>Email Address:</label>
                    <input
                        className='loginInput'
                        placeholder='Enter UserName (Email Id)'
                        type="email"
                        {...register('username', {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Enter Valid Email Id'
                            },
                            required: "Enter Email Id"
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    <label className='lableLogin'>Password:</label>
                    <input
                        className='loginInput'
                        placeholder='Enter User Password'
                        type="password"
                        {...register('password')}
                    />
                    {errors.password &&
                        <p className="error">{errors.password.message}</p>}

                    <button className='loginButton' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login

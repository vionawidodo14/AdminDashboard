import { AuthErrorCodes } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
// import './Signup.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

    const history = useHistory()
    const [err, setError] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const UserHandler = (e) => {
        const { name, value } = e.target;
        setUser((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const SubmitHandler = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('Registration Success')
                history.push('login')

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });

    }
    return (


        <div className='box'>
            {
                err && <p className='error'>{err}</p>

            }

            <form onSubmit={SubmitHandler} className="formlogin">
                <h2>Registration Form</h2>
                <div className="inputfield">
                    <input type="text" placeholder="Email" value={user.email} name='email' onChange={UserHandler} />
                </div>

                <div className="inputfield">
                    <input type="password" placeholder="Password" value={user.password} name='password' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="password" placeholder="Confirm Password" value={user.confirmPassword} name='confirmPassword' onChange={UserHandler} />
                </div>
                <div className="inputfield">
                    <input type="submit" value="sign up" style={{ color: 'white' }} />
                </div>
                <p className="forget">Already Have an account? <Link to={"/"} className="link">{"login"}</Link></p>
            </form>

        </div>

    )
}

export default Signup
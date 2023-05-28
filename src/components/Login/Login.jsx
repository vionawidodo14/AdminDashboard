import React, { useState } from 'react'
import './Signup.css'
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';

const Login = () => {
    // const fbAuth = useAuth()
    const history = useHistory()
    const [err, setError] = useState("")
    const [user, setUser] = useState({
        email: "",
        password: "",
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

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                history.push('/dashboard')
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('Wrong email or password')
            });

    }

    // const SubmitHandler = async (e) => {
    //     e.preventDefault()
    //     const { email, password } = user
    //     if (email == "" || password == "") {
    //         setInterval(() => {
    //             setError("")
    //         }, 5000)
    //         return setError("Fill All the Field")
    //     }
    //     try {
    //         await fbAuth.UserLogin(email, password)
    //         // navigate("/home")
    //     } catch (error) {

    //         if (error.code == "auth/user-not-found") {
    //             setInterval(() => {
    //                 setError("")
    //             }, 5000)
    //             return setError("User Not Found")
    //         }
    //         else if (error.code == "auth/wrong-password") {
    //             setInterval(() => {
    //                 setError("")
    //             }, 5000)
    //             return setError("Wrong Password")
    //         }
    //         else {
    //             setInterval(() => {
    //                 setError("")
    //             }, 5000)
    //             return setError(`${error.message}`)
    //         }
    //     }

    // }
    return (


        <div className='box'>
            {

                err && <p className='error'>{err}</p>

            }

            <form onSubmit={onLogin} className="formlogin">
                <h2>Login Form</h2>

                <div className="inputfield">
                    <input type="email" placeholder="Email" value={user.email} name='email' onChange={UserHandler} />
                </div>

                <div className="inputfield">
                    <input type="password" placeholder="Password" value={user.password} name='password' onChange={UserHandler} />
                </div>

                <div className="inputfield">
                    <input type="submit" value="login" style={{ color: 'white' }} />
                </div>
                <p className="forget">Don't have an account?   <Link to={"signup"} className="link">{"signup"}</Link></p>
            </form>

        </div>

    )
}

export default Login
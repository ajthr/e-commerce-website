import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom';

import GoogleLogin from 'react-google-login';
import FacebookLogin  from 'react-facebook-login';

import axios from 'axios';

import Navbar from '../components/Navbar'

interface props{
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
}

const LogIn = (props: props) => {
    const [emailInput, setEmailInput] = useState(false)
    const [email, setEmail] = useState("")

    const handleGoogleLogin = (googleData: any) => {
        axios.post("http://localhost/api/auth/openid/", googleData.profileObj)
            .then(() => props.history.push('/'))
    }

    const handleFacebookLogin = (facebookData: any) => {
        axios.post("http://localhost/api/auth/openid/", facebookData)
            .then(() => props.history.push('/'))
    }

    const sendEmail = () => {
        axios.post("http://localhost/api/auth/sendmail/", {
            "email": email
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost/api/auth/isauthenticated/").then((res) => {
            if (res.status === 200) {
                props.history.push('/')
            }
        }).catch(err => console.log(err))
    }, [props.history])

    return (
        <>
        <Navbar />
        <div className="container justify-content-center mt-5">
            <div className="d-flex flex-column align-items-center mx-3">
                <div className="mt-5 mb-5 py-2">
                    <span className="fs-3 text-custom">
                        Welcome
                    </span>
                </div>
                <GoogleLogin
                    clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin}
                    cookiePolicy={'single_host_origin'}
                    className="google-login-btn justify-content-center"
                />
                <FacebookLogin
                    appId={`${process.env.REACT_APP_FACEBOOK_CLIENT_ID}`}
                    textButton="Sign in with facebook"
                    fields="name,email,picture"
                    callback={handleFacebookLogin}
                    icon={<span><i className="fab fa-facebook-f fs-5 px-2"></i></span>}
                    cssClass="facebook-login-btn"
                />
                <button className="email-login-btn" onClick={() => setEmailInput(!emailInput)}>
                    <i className="far fa-envelope fs-5 px-2"></i>
                    <span>Sign in with Email</span>
                </button>
                {emailInput && (<div className="my-5 py-2">
                    <span className="fs-5">
                        <input type="email" placeholder="Enter your Email id" onChange={(e) => setEmail(e.target.value)} />
                        <button onClick={() => sendEmail()}>verify</button>
                    </span>
                </div>)}
                <div className="my-5 py-2">
                    <span className="small">
                        <div>Click “Sign In” to agree to Terms of Service </div> 
                        <div className="d-flex justify-content-center">and acknowledge Privacy Policy.</div>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default LogIn

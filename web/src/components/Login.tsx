import React, { useContext, useState } from 'react'

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import axios from 'axios';

import { baseUri } from '../assets/constants';

import { ApiContext } from '../contexts/ApiContext';

const Login = () => {

    const [emailInput, setEmailInput] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")

    const { modal, setModal, setUser } = useContext(ApiContext);

    const handleGoogleLogin = (googleData: any) => {
        axios.post(baseUri + "/api/auth/openid/", googleData.profileObj)
            .then(() => {
                setModal?.(false);
                setUser?.(true);
            })
            .catch((err) => console.log(err))
    }

    const handleFacebookLogin = (facebookData: any) => {
        axios.post(baseUri + "/api/auth/openid/", facebookData)
            .then(() => {
                setModal?.(false);
                setUser?.(true);
            })
            .catch((err) => console.log(err))
    }

    const sendEmail = () => {
        axios.post(baseUri + "/api/auth/sendmail/", {
            "email": email
        }).catch(err => console.log(err))
    }

    return (
        <>
            {modal &&
                <div className="modal-custom position-fixed w-100 h-100">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="btn-close m-4" onClick={() => setModal?.(false)}></button>
                            <div className="container justify-content-center">
                                <div className="d-flex flex-column align-items-center mx-3">
                                    <div className="mt-2 mb-3 py-2">
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
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Login

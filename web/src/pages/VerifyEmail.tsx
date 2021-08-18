
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { baseUri } from '../assets/constants';
import { props } from '../assets/interfaces'

import axios from 'axios';
import Loader from '../components/Loader';

const VerifyEmail = (props: props) => {

    const [verified, setVerified] = useState(0)

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const verify = async(token: string| null) => {
        await axios.post(baseUri + "/api/auth/verifyemail/", {
            "token": token
        }).then(() => {
            setVerified(1)
            props.history.push('/')
        }).catch(() => props.history.push('/'))
    }

    useEffect(() => {
        axios.get(baseUri + "/api/auth/isauthenticated/").then((res) => {
            if (res.status === 200) {
                props.history.push('/')
            }
        })
        const token: string | null = query.get("token")
        verify(token)
    }, [])
    return (
        <div>
            <Loader />
        </div>
    )
}

export default VerifyEmail


import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { baseUri } from '../assets/constants';

import axios from 'axios';
import Loader from '../components/Loader';

const VerifyEmail = (props: any) => {

    const history = useHistory();

    const [verified, setVerified] = useState<boolean>(false);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const verify = async (token: string | null) => {
        if (!verified) {
            await axios.post(baseUri + "/api/auth/verifyemail/", {
                "token": token
            }).then(() => {
                setVerified(true)
                history.push('/')
            }).catch(() => history.push('/'))
        }
    }

    useEffect(() => {
        axios.get(baseUri + "/api/auth/isauthenticated/").then((res) => {
            if (res.status === 200) {
                history.push('/')
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

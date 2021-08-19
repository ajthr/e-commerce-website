import React, {useState, createContext, useEffect} from 'react';

import axios from 'axios';

import { context } from '../assets/interfaces'
import { baseUri } from '../assets/constants';

export const ApiContext = createContext<context>({user: null, setUser: null, modal: null, setModal: null});;

const ApiProvider = ({ children }: { children: React.ReactChild | React.ReactChildren }) => {
    const [user, setUser] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);

    useEffect(() => {
        axios.get(baseUri + "/api/auth/isauthenticated/")
            .then((res) => {
                if(res.status === 200) {
                    setUser(true);
                }
            })
    }, [])

    return (
        <ApiContext.Provider value={{ user, setUser, modal, setModal }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider

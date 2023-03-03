import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Layout from '../../components/layout';

const Unsubscribe = (props) => {
    const router = useRouter()
    const [state, setState] = useState('sending request');
    const [id, setId] = useState();

    useEffect(() => {
        setId(router.query.id)
    }, [router])

    useEffect(() => {
        if (router.isReady) {
            makePostRequest();
        }
    }, [id])

    const makePostRequest = async () => {
        if (id == null) {
            return window.location.href = "/newsletter";
        }
        try {
            let reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                }),
                crossdomain: true
            };
            const res = await fetch('/api/newsletter/unsubscribe', reqOptions);
            const data = await res.json();
            setState(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Layout page='newsletter'>
            <div className="main container section">
                <h3>
                    {state}
                </h3>
            </div>
        </Layout>
    );
}

export default Unsubscribe
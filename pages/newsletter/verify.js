import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Layout from '../../components/layout';

const Verify = (props) => {
    const router = useRouter()
    const [state, setState] = useState('sending request');
    const [code, setCode] = useState();

    useEffect(() => {
        setCode(router.query.code)
    }, [router])

    useEffect(() => {
        if (router.isReady) {
            makePostRequest();
        }
    }, [code])

    const makePostRequest = async () => {
        if (code == undefined) {
            router.push('/newsletter')
        }
        try {
            let reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code
                }),
                crossdomain: true
            };
            const res = await fetch('/api/newsletter/verify', reqOptions);
            const data = await res.json();
            setState(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Layout page='newsletter'>
            <section className="main container section">
                <h3>
                    {state}
                </h3>
            </section>
        </Layout>
    );
}

export default Verify
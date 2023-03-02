import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import {useParams} from "react-router";
import {useLocation} from "react-router-dom";
import Layout from '../../components/layout';

export const Unsubscribe = (props) => {

    const [state, setState] = useState('sending request...');
    const [query, setQuery] = useState(new URLSearchParams(useLocation().search));

    const makePostRequest = async () => {
        const id = query.get("id");
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

    useEffect(() => {
        makePostRequest();
    }, [query]);


    return (
        <Layout page='newsletter/unsubscribe'>
            <div className="main container section">
                <h3>
                    {state}
                </h3>
            </div>
        </Layout>
    );
}
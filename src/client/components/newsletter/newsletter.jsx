import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

const Newsletter = (props) => {

    const [state, setState] = useState('sending request');

    const query = new URLSearchParams(useLocation().search);
    const code = query.get("code");

    const makePostRequest = async () => {
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

    useEffect(() => {
        makePostRequest();
    }, []);


    return (
        <div className="main container section">

            <h2>
                {state}
            </h2>

        </div>
    );
}

export default Newsletter
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

export const Verify = (props) => {

    const [state, setState] = useState('sending request...');

    const query = new URLSearchParams(useLocation().search);

    const makePostRequest = async () => {
        try {
            let reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: query.get("code")
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
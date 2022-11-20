import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

export const Verify = (props) => {

    const [state, setState] = useState('sending request...');

    const query = new URLSearchParams(useLocation().search);

    const makePostRequest = async () => {
        const code = query.get("code");
        if (code == null) {
            return window.location.href = "/newsletter";
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

    useEffect(() => {
        makePostRequest();
    }, []);


    return (
        <div className="main container section">
            <h3>
                {state}
            </h3>
        </div>
    );
}
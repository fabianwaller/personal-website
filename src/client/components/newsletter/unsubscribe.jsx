import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

export const Unsubscribe = (props) => {

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
                    id: query.get("id")
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
    }, []);


    return (
        <div className="main container section">

            <p>
                {state}
            </p>

        </div>
    );
}
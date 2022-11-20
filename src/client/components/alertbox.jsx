import React, { useState } from 'react'

const Alertbox = (props) => {
    const [alerts, setAlerts] = useState(props.alerts);

    return (
        <ul className="alertbox">
            {alerts.map((alert, index) => {
                return (
                    <div className="alertbox__alert" key={index}>
                        <p>{alert}</p>
                    </div>
                )
            })}
        </ul>
    )
}

export default Alertbox
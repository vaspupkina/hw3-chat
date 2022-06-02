import React from 'react'
import PropTypes from 'prop-types'

/* Функциональный компонент индикатора набора текста */
function Typing({from, message}) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </li>
    )
}

Typing.propTypes = {
    from : PropTypes.object.isRequired,
    message : PropTypes.object.isRequired
}

export default Typing

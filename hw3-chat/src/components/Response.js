import React from 'react'
import PropTypes from 'prop-types'

/* Функциональный компонент ответа */
function Response({from, message}) {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>&nbsp;
                <i className="fa fa-circle me"></i>
            </div>
            {
                message.text && (<div className="message other-message float-right">
                    {message.text}
                </div>)
            }
        </li>
    )
}

Response.propTypes = {
    from : PropTypes.object.isRequired,
    message : PropTypes.object.isRequired
}

export default Response

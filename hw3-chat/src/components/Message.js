import React from 'react'
import PropTypes from 'prop-types'

/* Функциональный компонент сообщения */
function Message({from, message}) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            {
                message.text && (<div className="message my-message">
                    {message.text}
                </div>)
            }
        </li>
    )
}

Message.propTypes = {
    from : PropTypes.object.isRequired,
    message : PropTypes.object.isRequired
}

export default Message

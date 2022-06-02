import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

/* Функциональный компонент истории сообщений */
function MessageHistory({list}) {
    if (!list || 
        !(list instanceof(Array)) || 
        !list.length) {
            return null;
        }

    const components = {'message' : Message, 
                        'response' : Response, 
                        'typing' : Typing};

    return (
        <ul>
            {
                list.map((message)=> {
                    const MessageComponent = components[message.type];
                    return <MessageComponent key={message.id} message={message} from={message.from} />
                })
            }
        </ul>
    )
}

MessageHistory.defaultProps = {
    list : []
}
MessageHistory.propTypes = {
    list : PropTypes.arrayOf(PropTypes.object)
}

export default MessageHistory

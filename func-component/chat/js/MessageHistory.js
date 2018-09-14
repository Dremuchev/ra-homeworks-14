'use strict';

const MessageHistory = ({ list }) => (
    list.length ? <ul>{list.map(el => createMessage(el)) }</ul> : null
);        

const createMessage = item => {
    const { type, id, from} = item;
    const Type = type === 'response' ? Response : type === 'message' ? Message : Typing;
    return <Type from={from} message={item} key={id} />;
}

MessageHistory.defaultProps = {
    list: []
}
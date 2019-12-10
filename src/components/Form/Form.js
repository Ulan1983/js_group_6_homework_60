import React from 'react';

const Form = props => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <input
                    onChange={props.onChange}
                    name='author'
                    type="text"
                    placeholder='Author'
                    value={props.author}
                />
                <input
                    onChange={props.onChange}
                    name='message'
                    type="text"
                    placeholder="Type message"
                    value={props.message}
                />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};

export default Form;
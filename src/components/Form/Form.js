import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <input
                    required
                    className="inp_author"
                    onChange={props.onChange}
                    name='author'
                    type="text"
                    placeholder='Author'
                    value={props.author}
                />
                <input
                    required
                    className="inp_message"
                    onChange={props.onChange}
                    name='message'
                    type="text"
                    placeholder="Type message"
                    value={props.message}
                />
                <button type='submit' className="btn">Send</button>
            </form>
        </div>
    );
};

export default Form;
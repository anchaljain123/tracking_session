import React, { useState } from "react";

const Input = props => {
    const [input, setInput] = useState(null);

    const {
        label,
        ...rest
    } = props;

    return (
        <div>
            {!!label && <label>{label}</label>}
            <input value={input} onChange={(e) => setInput(e.target.value)}  {...rest} />
        </div>
    );
}

export default Input;
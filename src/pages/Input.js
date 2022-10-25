import React, { useState } from "react";

function Input(){

    const [text,setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    }

    return(
        <div>
           <input type="text" value={text} placeholder="안녕" onChange={onChange} />
           <br/>
           <br/>
           <p>{text}</p>
        </div>
    );
}

export default Input;
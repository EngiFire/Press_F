import "../App.css";
import { useState } from "react";
import React from "react";

const Title = (props) => {
    const [value, setValue] = useState('Заголовок!');

    return <div>
        <div>{value}</div>
        <button onClick={()=>{
            setValue('Изменённый заголовок!!!')
        }}>Поменять</button>
    </div>
}

export default Title
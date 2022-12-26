import React from 'react';
import './style.css';

export default function Display(props){
    const type = props.data.value[0].label
    const degree = props.data.degree

    if (type === "Fahrenheit" && degree !== ""){
        return(
            <div>
                <p>{(parseInt(props.data.degree) - 32) * (5/9)} celsius</p>
            </div>
        )
    }
    else if(type === "Kelvin" && degree !== ""){
        return(
            <div>
                {/* <p>okay</p> */}
                <p>{(parseInt(props.data.degree) - 273.15)} celsius</p>
            </div>
        )
    }
    else {
        return(
            <div>

            </div>
        )
    }
}
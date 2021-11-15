import React, {useState} from 'react'

export default function Alert(props) {
    const convertToCapitalize = (word)=>{
        return props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{convertToCapitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    )
}

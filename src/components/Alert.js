import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
   
        props.alert  && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* jar props.alert null nsel tar to div tag (alert message) disel mahitar nahi */}
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}  {/* jar type success asel tar tar messsage display hoil*/}
        </div>
  )
}

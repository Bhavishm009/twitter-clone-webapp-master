import React from 'react'

function Button(props) {
  return (
      <button className={props.customCss} style={{outline:"none", border:"none"}} onClick={props.handleButtonEvent}>
          {props.buttonText}
          
    </button>
  )
}

export default Button
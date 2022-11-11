import React from "react";

const Button = ( {children, ...rest} ) => {

  return(
    <React.Fragment>
      <button  {...rest}> 
        {children} 
      </button>
    </React.Fragment>
  )
}

export default Button;
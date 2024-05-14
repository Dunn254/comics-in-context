import React, { useContext } from "react";
import StylesContext from "./StylesContext"

export default function CollectorButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={props.buttonStyling}>
        Click This!
      </button>
    </div>
  );
}  

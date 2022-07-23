import React, { useState } from "react"

export default function Selection({applyColor}){
  const [color, setColor] = useState({background:""})
  return (
    <div onClick={()=>{applyColor(setColor)}} style={color} className="fix-box">
      <h2 className="subheading">Selection</h2>
    </div>
  )
}

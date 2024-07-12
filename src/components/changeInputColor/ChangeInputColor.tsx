import { useState } from "react"


const ChangeInputColor = () => {

    const [colorSelected, setColorSelected] = useState<string>()
  return (
    <>
    <h3>Change input color</h3>
    
    <b>The color selected is: {colorSelected}</b>
    <br></br>
    <input type="color" onChange={(e)=>{setColorSelected(e.target.value)}}></input>
    </>
  )
}

export default ChangeInputColor
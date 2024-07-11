import { useState } from "react"


const ConsonantCounter = () => {

    const [sentence, setsentence] = useState<string>('')
 



  return (
    <>
    <h3>Number of consonants in your sentence</h3>
    <input placeholder="Write a sentence and show number of consonants" onChange={(e)=>{setsentence(e.target.value)}}></input>
    <br></br>
    {sentence}
    </>
  )
}

export default ConsonantCounter
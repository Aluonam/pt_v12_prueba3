import { useState } from "react"


const ConsonantCounter = () => {

    // const [sentence, setSentence] = useState<string>('')
    const [counterConsonant, setCounterConsonant] = useState<number>(0)
    const consonant : string[] = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Z', 'W', 'Y']

    const handleCounterConsonant = (sentence:string)=>{
      setCounterConsonant(0)
       const letters = sentence.toUpperCase().split('');
       letters.map((letra)=>{
        console.log(letra,"-",)
       if(consonant.some((consonante)=>consonante === letra)) {
        setCounterConsonant(counterConsonant+1)
       }

       })
       
   
    } 


  return (
    <>
    <h3>Number of consonants in your sentence</h3>
    <input placeholder="Write a sentence and show number of consonants" onChange={(e)=>{handleCounterConsonant(e.target.value)}}></input>
    <br></br>
    {counterConsonant}
    </>
  )
}

export default ConsonantCounter
import { useState } from "react"


const TransformWordConsonant = () => {

    const [sentence, setSentence] = useState<string>('')
    
    const firstLetter = ()=>{
        const words = sentence.split(' ');
        const lastLetter = words.map((word)=>{
          const letters = word.split('')
          const capitalLetter = letters[0].toUpperCase()
          letters[0] = capitalLetter
          return(
            letters.join('')
          )

        })
        return setSentence(lastLetter.join(' '))
    }

    const lastLetter = ()=>{
      const words = sentence.split(' ');
      const lastLetter = words.map((word)=>{
        const letters = word.split('').reverse();
        const capitalLetter = letters[0].toUpperCase()
        letters[0] = capitalLetter
        letters.reverse()
        return(
          letters.join('')
        )

      })
      return setSentence(lastLetter.join(' '))
  }
 
    

  return (
    <>
    <h3>Sentence in capital letter</h3>
    <input onChange={(e)=>{setSentence(e.target.value)}}></input>
    <br></br>
    <button onClick={()=>{firstLetter()}}>First letter</button>
    <button onClick={()=>{lastLetter()}}>Last letter</button>
    <br></br>
    {sentence}
    </>
  )
}

export default TransformWordConsonant
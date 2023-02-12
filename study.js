import React, { Component } from 'react'
import { useState } from 'react';
function Study() {
  let tell, assk;
let a=0;
  const [ask, setCard] = useState([
  ])
  const [num, setNum] = useState(0);
  const [truef, setTf] = useState(false);
  const [atruef, asetTf] = useState([]);
  const[flashcardmode,setFlashcardmode]=useState(false);
  const[nameclass,setclassname]=useState('wrap')
  const[nameclass2,setclassname2]=useState('sp')
  const[nameclass3,setclassname3]=useState('sp3')
  const [cardnum, switchcard]=useState(0);
  const awnsercapt = (evnt) => {
    tell = evnt.target.value
    console.log(tell)

  }


  const prompttcapt = (evnt) => {
    assk = evnt.target.value
    console.log(assk)

  }


  const toggleFlashcard = ()=>{
   
   console.log('hi')
    if (flashcardmode===false){
      setFlashcardmode(true)
      setclassname('no-wrap')
    setclassname2('no-wrap')
    setclassname3('no-wrap')
    }
else{
  setFlashcardmode(false)
  setclassname('wrap')
setclassname2('sp')
setclassname3('sp3')
}
  
  }
  
  const noreload = (event) => {
    // 👇️ prevent page refresh


   setNum(num + 1)


    setCard([...ask, {
      question: assk,
      awnser: tell, tf: false, id: num
    }])
    asetTf([...atruef,false])
    //ask.shift()
    //console.log(ask)

    event.preventDefault()
    

    //console.log("promp it"+' '+state.pr)
    //console.log("awnser it"+' '+state.awnser)


  }
  // p =this.state.awnser;


  const tfCheck = (hj) => {//switches objects bolean value to true or false
    console.log(hj)

    if (hj.tf === false) {
      hj.tf = true
      //console.log('in')
      setTf(true)
      atruef[hj.id]=true
      console.log(hj.id + 'is'+ atruef[hj.id])
    }
    else {
      hj.tf = false
      //console.log('out')
      setTf(false)
      atruef[hj.id]=false
      console.log(hj.id + 'is'+ atruef[hj.id])
    }


  }

  const flipt = (hj) => {

  }


  const deccard=()=>{
    console.log(cardnum)
    if (cardnum >0){
  switchcard(cardnum-1)
}
  
  }
  const inccard=()=>
  {
    if(cardnum< ask.length-1){
    switchcard(cardnum+1)}
    console.log(cardnum)
  }
  return (
    <div>
      


      <div className={nameclass}>
        <h1 className='ttl'>Quiz</h1>

        <form onSubmit={noreload}>
          <div>
           <div>
            <div className='prompt---'>prompt</div>
           
            <input className='prompt--' type='text' value={assk} onChange={prompttcapt} />
            </div>
          </div>
          <div className='awnser--'>awnser</div>
          <input className='awnser' type='text' value={tell} onChange={awnsercapt} />
          <button className='btn--' type='submit'>create Flashcard</button>
        </form>
        <button className='flash--mode' onClick={toggleFlashcard}>Flashcard mode</button>
      </div>
      <div>{ask.map(ask => (
<div className='display-input'>
<div className={nameclass3} onClick={() => tfCheck(ask)}>{ask.question}</div>
<div className={nameclass2} onClick={() => tfCheck(ask)}>{ask.awnser}</div>

</div>
))}</div>

{flashcardmode&&(<div className='flash-wrap'>
   
    <div className='flashcard' onClick={() => tfCheck(ask[cardnum])}>
      <div>{atruef[cardnum] ? ask[cardnum].awnser : ask[cardnum].question}</div>
     <div className='flipt'>{cardnum+1}/{ask.length}</div>
      </div>
  <button className='leftt' onClick={deccard}>{'<'}</button>
  <button onClick={toggleFlashcard} className='exit'>exit</button>
  <button className='right' onClick={inccard}>{'>'}</button>
  
 
  </div>)}
  
    </div>
  
  )

}

export default Study
//one of the challenges was trying to flip the flash 
//card to show its awnser the way I first did it was
// having a boolean as a variable for each of the flashcard objects
//the idea of this was that if the user clicked on a certain flash card it would call a function to switch 
//the flash cards boolean value from true to false or vice versa 
//I would than use a ternary operator in jsx to which was supposed to flip the flash card from showing the awnser to question or vice versa depending on what the objects boolean value was
//however clicking on the flash card didnt change its text I looked at all the console logs I made to see if they were printing what they were supposed to and created more to see if I missing anything howver all the console logs were printing the correct things
//I than created a tempoary hook and set it equal to false and replaced all the places I used or changed my previous objects boolean value to the tempoary boolean hook
//after testing the code it worked, the flash cards text would flip from question to awnser
//I came to the conclusion that the ternary operator wasn't reading my flashcard objects boolean value so I create another hook made up of an array of bollean values and increased its size verytime a new flashcard was created 
//I also replaced anywhere I used the flashcards boolean value with the arrays boolean value
//for ternary operator i called it on the indice of the flashcards id variable as I made each id variable of a flashcard have the same value as the arrays indice
//figure way so outside is not useable when in flashcard mode
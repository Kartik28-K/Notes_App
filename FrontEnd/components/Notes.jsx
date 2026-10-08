import { useState,useEffect } from 'react'
import '../src/App.css'

function Notes({onNoteAdded}) {
  const[note,setnote]=useState("")
  const[title,settitle]=useState("")
  const add=async()=>{
    try{
      const response=await fetch("http://127.0.0.1:8000/home/add",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        }  ,
        body:JSON.stringify({
          title:title,
          content:note
        })
      })
      if(response.ok){
        alert("saved succesfully")
        setnote("")
        settitle("")
        onNoteAdded()
      }
      
    }catch(error){
      console.log(error)
    }
  };
  return (
    <div>
      <div>
        <h1 className='text-2xl text-center'>Bhang Notes</h1>
        <div>
          <input type="text" placeholder='Enter Title'
          value={title}
          onChange={(e)=>settitle(e.target.value)}
          />
          <textarea 
          id="note" placeholder='Type your Note'
          value={note}
          onChange={(e)=>setnote(e.target.value)}
          >
        </textarea>
        </div>
        <h4>{title}</h4>
        <h4>{note}</h4>
        <button className="bg-blue-500 text-white p-2 rounded"
        onClick={add}>Add</button>
      </div>
    </div>
  )
}

export default Notes

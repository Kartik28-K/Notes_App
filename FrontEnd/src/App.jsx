import './App.css'
import Notes from '../components/Notes.jsx';
import { useState,useEffect } from 'react';
import Show from '../components/Show.jsx';

function App() {
  //const arr // all notes
  const[ListNotes,setListNotes]=useState([])
  const get_all= async()=>{
    // get a all notes
    try{
      const response = await fetch('http://127.0.0.1:8000/home/show',{
        method:'GET'
      })
      const data=await response.json()
      setListNotes(data)
    }catch(error){
      alert('Cant get notes there is a problem')
    }
  }

  useEffect(()=>{
    get_all()
  },[])

  const delete_Note= async (id)=>{
    try{
      const res=await fetch(`http://127.0.0.1:8000/home/delete/${id}`,{
      method:"DELETE",
      id:id
      })
      console.log(res)
    }
    catch(error){
      alert('Cant delete Something is wrong in Backend')
    }
    get_all()
  }
  
  const updateNote= async (id,title,content)=>{
    try{
      const res=await fetch(`http://127.0.0.1:8000/home/update/${id}`,{
      method:"PUT",
      headers: {
          "Content-Type": "application/json"
        }  ,
        body:JSON.stringify({
          title:title,
          content:content
        })
      })
    }
    catch(error){
      alert('Cant Update Something is wrong in Backend')
    }
    get_all()
  }

  const pin_note= async (id)=>{
    try{
      const res=await fetch(`http://127.0.0.1:8000/home/pin/${id}`,{
      method:"PUT"
      })
      console.log(res)
    }
    catch(error){
      alert('Cant Pin Something is wrong in Backend')
    }
    get_all()
  }

  return (
    <div
        className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Notes onNoteAdded={get_all}/>
      <Show 
      ListNotes={ListNotes}
      delete_Note={delete_Note}
      updateNote={updateNote}
      pin_note={pin_note}
      />
    </div>
  )
}

export default App

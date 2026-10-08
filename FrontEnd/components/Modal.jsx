import { useState,useEffect } from 'react'
import '../src/App.css'

function Modal({selectedNote,setselectedNote,update_Note,}) {
    const updateNote=()=>{
        update_Note(
            selectedNote._id,
            selectedNote.title,
            selectedNote.content,
        )
        setselectedNote(null)
    }
  return (
    <>
        {selectedNote && (
            <div
          className="fixed inset-0 bg-black/50
                     flex items-center justify-center z-50"
          onClick={() => setselectedNote(null)}
            >

          <div
            className="bg-white dark:bg-gray-800
                       text-gray-900 dark:text-white
                       w-11/12 max-w-2xl
                       rounded-xl p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
            >

            <input
              value={selectedNote.title}
              onChange={(e) =>
                setselectedNote({
                  ...selectedNote,
                  title: e.target.value
                })
              }
              className="w-full text-2xl font-bold
                         bg-transparent border-b
                         border-gray-300 dark:border-gray-600
                         outline-none mb-4"
            />

            <textarea
              value={selectedNote.content}
              onChange={(e) =>
                setselectedNote({
                  ...selectedNote,
                  content: e.target.value
                })
              }
              className="w-full h-80
                         bg-gray-50 dark:bg-gray-700
                         border border-gray-300 dark:border-gray-600
                         rounded-lg p-4
                         outline-none resize-none"
            />

            <div className="flex justify-end gap-3 mt-4">

              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setselectedNote(null)}
              >
                Cancel
              </button>

              <button
                className="bg-blue-500 hover:bg-blue-600
                           text-white px-4 py-2 rounded"
                onClick={updateNote}
              >
                Update
              </button>

            </div>

          </div>

        </div>

        )}
    </>
  )
}

export default Modal

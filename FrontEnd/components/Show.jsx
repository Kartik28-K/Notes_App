import { useState, useEffect } from 'react'
import '../src/App.css'
import Modal from './Modal.jsx'
import { Pin, PinOff } from 'lucide-react'

function Show({ ListNotes, delete_Note, updateNote, pin_note }) {
  const [selectedNote, setselectedNote] = useState(null)

  const deleteNote = (id) => {
    delete_Note(id)
  }
  const sortedNotes = [...ListNotes].sort(
    // sort for pinned notes first rest after that
  (a, b) => Number(b.pinned) - Number(a.pinned)
  )
  const update_Note = (id, title, content) => {
    updateNote(id, title, content)
  }
  const handlePin = (id) => {
    pin_note(id)
  }
  return (
    <div>
      <div className="p-4">
        {sortedNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {sortedNotes.map(note => (
              <div
                key={note._id}
                className="
                relative
                border border-gray-300 dark:border-gray-700
                rounded-xl
                p-4
                bg-white dark:bg-gray-800
                text-gray-900 dark:text-white
                shadow-sm
                hover:shadow-md
                transition-shadow
                cursor-pointer
                min-h-[180px]
              "
                onClick={() => setselectedNote(note)}
              >

                {/* Title */}
                <h1 className="font-semibold text-lg mb-2 pr-8 truncate">
                  {note.title}
                </h1>

                {/* Content */}
                <p className="
                text-sm
                text-gray-700 dark:text-gray-300
                whitespace-pre-wrap
                line-clamp-6
              ">
                  {note.content}
                </p>

                {/* Dates */}
                <div className="absolute bottom-3 left-4">
                  <h6 className="text-xs text-gray-400">
                    {note.updated_at}
                  </h6>
                </div>

                {/* Pin */}
                <button
                  className="
                  absolute top-3 right-3
                  p-1.5
                  rounded-full
                  hover:bg-gray-200
                  dark:hover:bg-gray-700
                "
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePin(note._id)
                  }}
                >
                  {note.pinned ? (
                    <PinOff size={18} />
                  ) : (
                    <Pin size={18} />
                  )}
                </button>

                {/* Delete */}
                <button
                  className="
                  absolute bottom-3 right-3
                  text-xs
                  text-red-500
                  hover:text-red-700
                "
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteNote(note._id)
                  }}
                >
                  Delete
                </button>

              </div>
            ))}

          </div>
        ) : (
          <div className="flex justify-center items-center py-20">
            <h2 className="text-gray-500 dark:text-gray-400">
              No Notes to Show
            </h2>
          </div>
        )}
      </div>
      <Modal selectedNote={selectedNote}
        setselectedNote={setselectedNote}
        update_Note={update_Note}
      />
    </div>
  )
}

export default Show

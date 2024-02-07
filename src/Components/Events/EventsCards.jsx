import React from 'react'

const EventsCards = ({eventname}) => {
  const {id} = eventname;
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-80">
          <h1 className="text-2xl font-bold">Event 1</h1>
          <p className="text-gray-500">Event 1 Description</p>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4">Register</button>
        </div>
      </div>
    </>
  )
}

export default EventsCards
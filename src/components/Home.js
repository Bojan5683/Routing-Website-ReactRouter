import React from 'react'
import '../assets/Home.css'
import Main from './Main'

function Home() {
  return (
    <>
    <div className='home'>
      <h1 className='adventure'>ADVENTURE AWAITS</h1>
      <h3 className='waiting'>What are you waiting for?</h3>
      <div className='btn-wrapper'>
        <button className='started'>GET STARTED</button>
        <button className='trailer'>WATCH TRAILER</button>
      </div>
    </div>
    <Main/>
    </>
  )
}

export default Home
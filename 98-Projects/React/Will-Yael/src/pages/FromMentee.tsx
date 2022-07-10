        import React from 'react'
import SelectedMentor from './Home'

const FromMentee = () => {
  return (
    <>
    <h1 className='header'>Sent Today</h1> 

    <div className='Top-Card'>
    <SelectedMentor/>
    <SelectedMentor/>
    <SelectedMentor/>
    </div>

    <h1 className='header'>Sent Last Week</h1>

    <div className='Bottom-Card'>
    <SelectedMentor/>
    <SelectedMentor/>
    <SelectedMentor/>
    </div>
    </>
  )
}

export default FromMentee
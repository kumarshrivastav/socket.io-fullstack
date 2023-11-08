import React from 'react'
import Input from './Input'
import ListComment from './ListComment'

const Landing = () => {
  return (
    <>
    <div className="container">
        <div className='col-md-12'>
            <h4>This is Comment System App using ReactJs, NodeJs, MongoDB and Express</h4>
            <p>This is a Comment System using Socket Io</p>
        </div>
    </div>
    <Input/>
    <ListComment/>
    </>
  )
}

export default Landing
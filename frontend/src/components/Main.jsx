import React from 'react'
import CheckedLists from './CheckedLists'
import Header from './Header'
import MainBody from './MainBody'

export default function Main() {
  return (
    <div className='main'>
        <Header/>
        <MainBody/>
        <CheckedLists/>
    </div>
  )
}

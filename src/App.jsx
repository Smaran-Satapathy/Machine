import React from 'react'
import Heading from './Components/Heading'
import Machine from './Components/Machine'
import './index.css'

export default function App() {
  return (
    <>
      <Heading/>
      <hr />
      <Machine x="😄" y="😄" z="😄"/>
      <hr />
      <Machine x="😄" y="🗡️" z="🦀" />
      <hr />
      <Machine x="🗡️" y="🗡️" z="🗡️"/>
    </>
  )
}

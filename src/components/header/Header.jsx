import Atropos from 'atropos'
import React from 'react'
import receb from '../../image/receb1.png'

const Header = () => {
  return (
    <>
    <h1>Hello World</h1>
    <div>
      <Atropos>
  {/* 
  Element with negative offset will move in reverse direction,
  making it appear behind the scene
  */}
  <div data-atropos-offset="-5">
  <img src={receb}/>
  </div>
  <div data-atropos-offset="0">
  <img src={receb}/>
  </div>
  <div data-atropos-offset="5">
  <img src={receb}/>
  </div>


</Atropos>
    </div>
    </>
  )
}

export default Header

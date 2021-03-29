/*

From
https://figma-to-react.vercel.app/

*/


import React from 'react'

import '../../assets/css/Sample.css';

export class IndexComponent extends React.Component {
  render() {
    return (
      <div className='FigmatoReact'>
        <div className='Title'>
          Figma to React
        </div>
        <Inputfield />
        <Button />
        <div className='TabMenu'>
          <TabButton />
          <TabButton />
          <TabButton />
        </div>
        <Code />
      </div>
    )
  }
}

function Inputfield () {
  return (
    <div className='Inputfield'>
      <div className='Shape' />
      <div className='Label'>
        Figma URL:
      </div>
      <div className='Value'>
        https://www.figma.com/file/qosbLLy02hcWkJDEcodamN
      </div>
    </div>
  )
}

function Button () {
  return (
    <div className='Button'>
      <div className='Label'>
        Generate
      </div>
    </div>
  )
}

function Code () {
  return (
    <div className='Code'>
      <div className='Rectangle1' />
      <div className='Outputcode'>
        Text
      </div>
    </div>
  )
}

function TabButton () {
  return (
    <div className='TabButton'>
      <div className='Shape' />
      <div className='Label'>
        React Web
      </div>
    </div>
  )
}
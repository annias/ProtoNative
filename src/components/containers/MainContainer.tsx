import React from 'react'
import LeftContainer from '../left/LeftContainer';
import AppCanvas from '../middle/AppCanvas'
import RightContainer from '../right/RightContainer'


const MainContainer = (): JSX.Element => {
  return (
    <div>
      <LeftContainer />
      <AppCanvas />
      <RightContainer />
    </div>
  )
}

export default MainContainer;
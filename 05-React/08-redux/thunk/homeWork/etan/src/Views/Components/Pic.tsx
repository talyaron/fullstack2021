import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectPic} from '../../features/picComp/picCompSlice'
function Pic() {
  const image = useAppSelector(selectPic)
  return (
<img src={image} className="App-logo" alt="" />
  )
}

export default Pic
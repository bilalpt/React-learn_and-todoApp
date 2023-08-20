import React from 'react'
import Logged from './Logged'
import Notlogged from './Notlogged'

const Main = ({one}) => {
  return (
    <div>
      {one ?<Logged/>:<Notlogged/>}
    </div>
  )
}

export default Main

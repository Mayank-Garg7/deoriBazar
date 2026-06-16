import React from 'react'


const ChildrenType = {
  children: Node || HTMLElement,
}
function Card({children : ChildrenType}) {
  return (
    <div className=''>
      {children}
    </div>
  )
}

export default Card

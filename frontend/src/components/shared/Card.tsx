import React, { type ReactNode } from "react";



type ChildrenType = {
  children: ReactNode;
};
function Card({children} : ChildrenType) {
  return (
    <div className='border-2 px-5 py-3 w-ful rounded-lg'>
      {children}
    </div>
  )
}

export default Card

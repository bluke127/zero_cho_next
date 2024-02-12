import React from 'react'

function layout({children,modal}:{children:any,modal:any}) {
  return (
    <div>{children},{modal}</div>
  )
}

export default layout
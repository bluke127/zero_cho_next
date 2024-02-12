import React from 'react'

function page({params}:{params:string}) {
  return (
    <div>{JSON.stringify(params)}AAAAAAA</div>
  )
}

export default page
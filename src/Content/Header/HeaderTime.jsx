import { useState } from 'react'
import React from 'react'



export default function HeaderTime () {
    const [now, setNow]= useState(new Date())

    setInterval(() => setNow(new Date()), 1000)
return (
   <>

      <span>Time: {now.toLocaleTimeString()}</span>
      </>
)
}


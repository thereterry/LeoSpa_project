import React from 'react'
import { useEffect, useState } from 'react'

const Loader = () => {

  useEffect(()=>{
    document.querySelector("dialog").showModal()
  }, [  ])

  return (
    <dialog class="loader">Loading...</dialog>
  )
}

export default Loader
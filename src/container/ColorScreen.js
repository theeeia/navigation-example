import React from 'react'
import {useParams} from 'react-router-dom'

export default function ColorScreen() {
   const {color} = useParams()
  return (

    <div style={{backgroundColor:color,height:"100vh"}}>
        
    </div>
  )
}



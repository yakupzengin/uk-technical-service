import React from 'react'
import "./pageContainer.css"

export default function PageContainer({children}) {
  return (
    <div className="page-container">  {children} </div>
  )
}
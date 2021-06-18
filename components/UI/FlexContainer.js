import React from 'react'

export default function FlexContainer({children, classes=''}) {
  return (
    <div className={`flex ${classes}`}>
      {children}
    </div>
  )
}

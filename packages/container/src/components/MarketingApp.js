import React, { useEffect, useRef } from 'react'
import { mount } from 'marketing/MarketingApp'

function MarketingApp() {
  console.log('hello again')
  const ref = useRef()

  useEffect(() => {
    console.log('ref::', ref)
    mount(ref.current)
  }, [])

  return (
    <div ref={ref}>
    </div>
  )
}

export default MarketingApp

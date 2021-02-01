import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './Header'
import MarketingApp from './components/MarketingApp'

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Header/>
            <MarketingApp/>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}
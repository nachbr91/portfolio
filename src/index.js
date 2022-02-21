import React from 'react'
import ReactDOM from 'react-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import './index.css'
import App from './App'

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <App />
  </StyledEngineProvider>,
  document.getElementById('root')
)

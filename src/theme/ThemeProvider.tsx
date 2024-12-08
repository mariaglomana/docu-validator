import React, { ReactNode } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import breakpoints from './breakpoints'
import { default as CustomCSSBaseline } from './CSSBaseline'
import { default as MuiButtonBase } from './Button'

const theme = createTheme(
  {
    breakpoints,
    palette: { primary: { main: '#551a8b' }, secondary: { main: '#343434' } },
  },
  {
    components: {
      MuiCssBaseline: CustomCSSBaseline,
      MuiButtonBase,
      MuiButton: { defaultProps: { variant: 'contained' } },
    },
  },
)

const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </React.StrictMode>
  )
}

export default ThemeProvider

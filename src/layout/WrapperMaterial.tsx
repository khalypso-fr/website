import React, { FC } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { paletteOptions } from '../config/palette'

const theme = createTheme({ palette: paletteOptions })

const WrapperMaterial: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default WrapperMaterial

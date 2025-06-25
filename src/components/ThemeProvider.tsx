'use client'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from '@/theme/theme'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  )
} 
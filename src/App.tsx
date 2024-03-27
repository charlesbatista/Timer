import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/styles/global'
import { defaultTheme } from './components/styles/themes/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

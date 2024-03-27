import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './components/styles/global'
import { defaultTheme } from './components/styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="warning" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
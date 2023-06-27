import { HashRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BlogProvider } from './contexts/BlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </HashRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

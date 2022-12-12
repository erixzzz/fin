import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Layout } from './Layout/layoutDefault'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Layout />
    </ThemeProvider>
  )
}

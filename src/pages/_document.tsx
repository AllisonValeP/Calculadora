import { Html, Head, Main, NextScript } from 'next/document'
import { StyledEngineProvider } from '@mui/material';

export default function Document() {
  return (
    <StyledEngineProvider injectFirst>
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </StyledEngineProvider>
  )
}

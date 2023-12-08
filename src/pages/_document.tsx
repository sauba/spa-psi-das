import { SpeedInsights } from "@vercel/speed-insights/next"
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
        <SpeedInsights />
      </body>
    </Html>
  )
}

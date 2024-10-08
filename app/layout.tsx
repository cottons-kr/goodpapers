import { ILayoutProps } from '@/types'
import { SessionProvider } from 'next-auth/react'

import '@/styles/app.scss'
import '@/styles/colors.scss'
import '@/styles/typography.scss'
import s from './layout.module.scss'

export default function RootLayout(props: ILayoutProps) {
  return <>
    <SessionProvider>
      <html lang='ko'>
        <head>
          <link rel='preconnect' href='https://cdn.jsdelivr.net' crossOrigin='anonymous' />
          <link rel='preload' as='style' crossOrigin='anonymous' href='https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/static/split/WantedSans.min.css' />
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/static/split/WantedSans.min.css' />
        </head>
        <body className={s.body}>{props.children}</body>
      </html>
    </SessionProvider>
  </>
}

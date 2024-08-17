import { ILayoutProps } from '@/types'

export default function RootLayout(props: ILayoutProps) {
  return <>
    <html lang='ko'>
      <head>
        <link rel='preconnect' href='https://cdn.jsdelivr.net' crossOrigin='anonymous' />
        <link rel='preload' as='style' crossOrigin='anonymous' href='https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/static/split/WantedSans.min.css' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/static/split/WantedSans.min.css' />
      </head>
      <body>{props.children}</body>
    </html>
  </>
}

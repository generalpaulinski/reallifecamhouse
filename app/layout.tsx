import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <meta name="seobility" content="2e09730cefed475c79fdb5c815d6017b"/>
      <meta property="og:title" content="Voyeur House | RealLifeCam - LIVE &amp; FREE Hidden Cams 24/7"/>
      <meta property="og:description" content="Watch 24/7 FREE RealLifeCam Voyeur Videos [LIVE] + Replays and Archive from hundreds of voyeur cams, creators and locations!"/>
    </head>
      <body style={{backgroundColor: '#cf5c5c'}} className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-red-400 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

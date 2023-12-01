'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })

    const tagManagerArgs = {
      gtmId: 'GTM-WTLQRL9N'
    }

    ReactGA.initialize('G-Q3MV2XW4LX');
    ReactGA.pageview('/index.html');

    TagManager.initialize(tagManagerArgs);
  })

  return (
    <>
      <main className="grow">

        {children}

      </main>

      <Footer />
    </>
  )
}

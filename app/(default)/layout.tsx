'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Footer from '@/components/ui/footer'

import ReactGA from 'react-ga';

const TRACKING_ID = process.env.REACT_APP_GA;
ReactGA.initialize(TRACKING_ID);

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

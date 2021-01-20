import React from 'react'

import Banner from '../home/components/Banner'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

export default function Detail() {
  return (
    <>
      <div className="overlay_nav" />
      <main className="course-detail" id="main">
        <Banner />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
    </>
  )
}

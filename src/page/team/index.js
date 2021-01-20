import React from 'react'

import Founder from './components/Founder'
import Student from './components/Student'

export default function Team() {
  return (
    <>
      <div className="overlay_nav" />
      <main className="team" id="main">
        <section>
          <div className="container">
            <div className="top">
              <h2 className="main-title">cfd team</h2>
              <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
              elementum
              sem non luctus
              </p>
            </div>
            <div className="list row">
              <Founder name="Trần Nghĩa" specialized="Founder &amp; Creative Front-End Developer" />
              <Founder name="đặng thuyền vương" specialized="Co-Founder &amp; Fullstack Developer" />
              <Founder name="đặng thuyền quân" specialized="Co-Founder &amp; Backend Developer" />
              <Founder name="nguyễn đức huy" specialized="Co-Founder &amp; Front-End Developer" />
              <Student name="diệp anh thy" />
              <Student name="huỳnh tiến tài" />
              <Student name="ngô thành long" />
              <Student name="trần anh tuấn" />
              <Student name="ngô thành long " />
              <Student name="nguyễn minh tùng" />
              <Student name="diệp anh thy" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

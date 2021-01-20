import React from 'react'
import Banner from './components/Banner'
import CourseList from './components/CourseList'
import Gallery from './components/Gallery'
import Special from './components/Special'
import Review from './components/Review'
import Form from './components/Form'

export default function Home() {
    return (
        <>
        <div className="overlay_nav" />
        <main className="homepage" id="main">
          <Banner />
          <CourseList />        
          <Form />
          {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="/https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="/video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="/img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
          <Review />
          <Gallery />
          <Special />
        </main>
      </>
    )
}
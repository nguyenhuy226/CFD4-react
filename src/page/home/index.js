import React from 'react'

export default function index() {
    return (
        <div>
        <header id="header">
          <div className="wrap">
            <div className="menu-hambeger">
              <div className="button">
                <span />
                <span />
                <span />
              </div>
              <span className="text">menu</span>
            </div>
            <a href="#" className="logo">
              <img src="/img/logo.svg" alt="" />
              <h1>CFD</h1>
            </a>
            <div className="right">
              <div className="have-login">
                <div className="account">
                  <a href="#" className="info">
                    <div className="name">Trần Lê Trọng Nghĩa</div>
                    <div className="avatar">
                      <img src="/img/avt.png" alt="" />
                    </div>
                  </a>
                </div>
                <div className="hamberger">
                </div>
                <div className="sub">
                  <a href="#">Khóa học của tôi</a>
                  <a href="#">Thông tin tài khoản</a>
                  <a href="#">Đăng xuất</a>
                </div>
              </div>
              {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
            </div>
          </div>
        </header>
        <nav className="nav">
          <ul>
            <li className="li_login">
              <a href="#">Đăng nhập</a>
              <a href="#">Đăng ký</a>
            </li>
            <li className="active">
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">CFD Team</a>
            </li>
            <li>
              <a href="#">Khóa Học</a>
            </li>
            <li>
              <a href="#">Dự Án</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </nav>
        <div className="overlay_nav" />
        <main className="homepage" id="main">
          <div className="banner jarallax">
            <div className="container">
              <div className="content">
                <h2 className="title">Thực Chiến</h2>
                <h2 className="title">Tạo ra sản phẩm có giá trị</h2>
                <div className="btn main round">KHÓA HỌC</div>
              </div>
            </div>
            <div className="jarallax-img">
              <img data-src="/img/bg-cover.jpg" alt="" className="lazyload" />
              <div className="video-bg lazyload" data-src="/video/CFD-video-bg2.mp4" />
            </div>
          </div>
          <section className="section-courseoffline">
            <div className="container">
              <p className="top-des">
                The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                has
                a more-or-less normal
              </p>
              <div className="textbox">
                <h2 className="main-title">Khóa học Offline</h2>
              </div>
              <div className="list row">
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <span className="badge b1">Đã kết thúc</span>
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        Front-end căn bản
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <span className="badge b2">Đang diễn ra</span>
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        React JS
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Vương Đặng</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <span className="badge b3">Sắp khai giảng</span>
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        Animation
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        Scss, Grunt JS và Boostrap 4
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a href="#" className="name">
                        UX/UI Design
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a className="name" href="#">
                        Web Responsive
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <a href="#" className="register-btn">Đăng Ký</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-courseonline section-blue">
            <div className="container">
              <div className="textbox">
                <h2 className="main-title">Khóa học Online</h2>
              </div>
              <div className="list row">
                <div className="col-md-4 course gray">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a href="#" className="name">
                        Front-end căn bản
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course gray">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a href="#" className="name">
                        Front-end nâng cao
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 course gray">
                  <div className="wrap">
                    <a className="cover" href="#">
                      <img src="/img/img1.png" alt="" />
                      <div className="hover">
                        <div className="top">
                          <div className="user">
                            <img src="/img/icon-user-white.svg" alt="" />
                            12</div>
                          <div className="heart">
                            <img src="/img/icon-heart.svg" alt="" /> 100
                          </div>
                        </div>
                        <div className="share">
                          <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                      </div>
                    </a>
                    <div className="info">
                      <a href="#" className="name">
                        Laravel framework
                      </a>
                      <p className="des">
                        One of the best corporate fashion brands in Sydney
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <div className="register-btn">Đăng Ký</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-deco">C</div>
            </div>
          </section>
          <section className="section-different">
            <div className="container">
              <div className="row">
                <div className="titlebox col-md-6 col-sm-12 col-xs-12">
                  <h2 className="main-title white textleft">Những điều <br /><span>đặc biệt</span> tại CFD</h2>
                  <div className="videodif" data-src="/video/CFD-video-intro.mp4">
                    <img src="/img/img-cfd-dac-biet.jpg" alt="" />
                    <div className="play-btn btn-video-intro">
                      <img src="/img/play-icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="contentbox col-md-6 col-sm-12 col-xs-12">
                  <div className="item">
                    <h4>Không cam kết đầu ra</h4>
                    <p>Với CFD thì việc cam kết đầu ra nó sẽ không có ý nghĩa nếu như cả người hướng dẫn và
                      người
                      học không thật sự tâm huyết và cố gắng. Vì thế, đội ngũ CFD sẽ làm hết sức để giúp các
                      thành
                      viên tạo ra sản phẩm có giá trị, thay vì cam kết.
                    </p>
                  </div>
                  <div className="item">
                    <h4>Không chỉ là một lớp học</h4>
                    <p>CFD không phải một lớp học thuần túy, tất cả thành viên là một team, cùng hổ trợ, chia sẻ
                      và
                      giúp đỡ nhau trong suốt quá trình học và sau này, với sự hướng dẫn tận tâm của các thành
                      viên đồng sáng lập.
                    </p>
                  </div>
                  <div className="item">
                    <h4>Không để ai bị bỏ lại phía sau</h4>
                    <p>Vì chúng ta là một team, những thành viên tiếp thu chậm sẽ được đội ngũ CFD kèm cặp đặc
                      biệt,
                      cùng sự hổ trợ từ các thành viên khác. Vì mục tiêu cuối cùng là hoàn thành
                      khóa
                      học thật tốt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
          <section className="section-testimonial">
            <div className="container">
              <div className="textbox">
                <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
              </div>
              <div className="testimonial">
                <div className="testimonial-item">
                  <div className="item">
                    <div className="text">
                      <div className="ct ct-1 active">
                        <div className="info">
                          <div className="name">
                            <h4>Tiến Tài</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình front-end qua
                          khóa học. Like cho 4 mentor.
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                          <span>09/10/2020</span>
                        </div>
                      </div>
                      <div className="ct ct-2">
                        <div className="info">
                          <div className="name">
                            <h4>Phạm Thành Trung</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                        </div>
                        <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero
                          id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor
                          in, molestie lectus. Aenean porttitor purus at purus euismod tristique
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                          <span>01/10/2020</span>
                        </div>
                      </div>
                      <div className="ct ct-3">
                        <div className="info">
                          <div className="name">
                            <h4>Nguyễn Văn Tuấn</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                        </div>
                        <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin libero
                          id magna finibus, in maximus urna tincidunt. Nam at leo lacinia, interdum dolor
                          in, molestie lectus. Aenean porttitor purus at purus euismod tristique
                        </div>
                        <div className="bottom">
                          <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                          <span>01/10/2020</span>
                        </div>
                      </div>
                    </div>
                    <div className="images">
                      <div className="list">
                        <div className="carousel-cell">
                          <div className="img">
                            <picture>
                              <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                              <img data-flickity-lazyload="img/tes.jpg" alt="" />
                            </picture>
                          </div>
                          <div className="ct_m">
                            <div className="info">
                              <div className="name">
                                <h4>Tiến Tài</h4>
                                <p>Thành viên CFD1</p>
                              </div>
                              <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                            </div>
                            <div className="content">
                              Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                              front-end qua
                              khóa học. Like cho 4 mentor.
                            </div>
                            <div className="bottom">
                              <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                              <span>09/10/2020</span>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-cell">
                          <div className="img">
                            <picture>
                              <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                              <img data-flickity-lazyload="img/tes.jpg" alt="" />
                            </picture>
                          </div>
                          <div className="ct_m">
                            <div className="info">
                              <div className="name">
                                <h4>Nguyễn Văn Tuấn</h4>
                                <p>Thành viên CFD1</p>
                              </div>
                              <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                            </div>
                            <div className="content">
                              Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                              front-end qua
                              khóa học. Like cho 4 mentor.
                            </div>
                            <div className="bottom">
                              <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                              <span>09/10/2020</span>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-cell">
                          <div className="img">
                            <picture>
                              <source media="(max-width: 767px)" srcSet="img/Intersect.png" />
                              <img data-flickity-lazyload="img/tes.jpg" alt="" />
                            </picture>
                          </div>
                          <div className="ct_m">
                            <div className="info">
                              <div className="name">
                                <h4>Phạm Thành Trung</h4>
                                <p>Thành viên CFD1</p>
                              </div>
                              <div className="quotes"><img src="/img/quotes.svg" alt="" /></div>
                            </div>
                            <div className="content">
                              Mentor có tâm, tận tình. Mình tìm được hướng đi trong lập trình
                              front-end qua
                              khóa học. Like cho 4 mentor.
                            </div>
                            <div className="bottom">
                              <a href="#" target="_blank"><img src="/img/facebook.svg" alt="" /></a>
                              <span>09/10/2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dots" />
                  <div className="btn_ctr prev" />
                  <div className="btn_ctr next" />
                </div>
              </div>
            </div>
          </section>
          <section className="section-gallery">
            <div className="textbox">
              <h2 className="main-title">Chúng ta là một team</h2>
            </div>
            <div className="list">
              <img data-flickity-lazyload="img/img_team1.png" alt="" />
              <img data-flickity-lazyload="img/img_team2.png" alt="" />
              <img data-flickity-lazyload="img/img_team3.png" alt="" />
              <img data-flickity-lazyload="img/img_team4.png" alt="" />
              <img data-flickity-lazyload="img/img_team3.png" alt="" />
              <img data-flickity-lazyload="img/img_team4.png" alt="" />
              <img data-flickity-lazyload="img/img_team1.png" alt="" />
              <img data-flickity-lazyload="img/img_team2.png" alt="" />
              <img data-flickity-lazyload="img/img_team3.png" alt="" />
              <img data-flickity-lazyload="img/img_team4.png" alt="" />
              <img data-flickity-lazyload="img/img_team3.png" alt="" />
              <div className="item carousel-cell">
                <img data-flickity-lazyload="img/img_team4.png" alt="" />
              </div>
            </div>
            <div className="controls">
              <div className="btn_ctr prev" />
              <span>Trượt qua</span>
              <div className="timeline">
                <div className="process" />
              </div>
              <div className="btn_ctr next" />
            </div>
          </section>
          <section className="section-action">
            <div className="container">
              <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
              <div className="btn main round bg-white">Đăng ký</div>
            </div>
          </section>
        </main>
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5 left">
                <p className="des">
                  Sáng tạo, tinh tế và phù hợp sẽ khiến
                  sản phẩm của bạn trở nên khác biệt.
                </p>
                <p className="address">
                  Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
                </p>
                <p className="phone">(+84) 98 9596 913</p>
                <div className="social">
                  <a className="fb" href="#">
                    {/* <img src="/img/icon-fb.svg" alt=""> */}
                  </a>
                  <a className="gmail" href="#">
                    {/* <img src="/img/icon-gmail.svg" alt=""> */}
                  </a>
                  <a className="skype" href="#">
                    {/* <img src="/img/icon-skype.svg" alt=""> */}
                  </a>
                </div>
              </div>
              <div className="right">
                <nav>
                  <ul>
                    <li>
                      <a href="#">Trang chủ</a>
                    </li>
                    <li>
                      <a href="#">Khóa học</a>
                    </li>
                    <li>
                      <a href="#">Thanh toán</a>
                    </li>
                    <li>
                      <a href="#">Điều khoản</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <a href="#" className="back-to-top">
              <div className="line" />
              CUỘN LÊN
            </a>
          </div>
          <div className="copy-right">
            <div className="container">
              <p>2020 Creative Front-End Dev</p>
              <p>Được thiết kế và lập trình bởi CFD Team</p>
            </div>
          </div>
        </footer>
        {/* popup video homepage */}
        <div className="popup-video" style={{display: 'none'}}>
          <div className="wrap">
            <div className="video-src" />
          </div>
          <div className="close" />
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
          <div className="wrap">
            {/* login-form */}
            <div className="ct_login" style={{display: 'block'}}>
              <h2 className="title">Đăng nhập</h2>
              <input type="text" placeholder="Email / Số điện thoại" />
              <input type="password" placeholder="Mật khẩu" />
              <div className="remember">
                <label className="btn-remember">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <p>Nhớ mật khẩu</p>
                </label>
                <a href="#" className="forget">Quên mật khẩu?</a>
              </div>
              <div className="btn rect main btn-login">đăng nhập</div>
              <div className="text-register" style={{}}>
                <strong>hoặc đăng ký bằng</strong>
              </div>
              <div>
                <div className="btn btn-icon rect white btn-google">
                  <img src="/img/google.svg" alt="" />
                  Google
                </div>
              </div>
              <div className="close">
                <img src="/img/close-icon.png" alt="" />
              </div>
            </div>
            {/* email form */}
            <div className="ct_email">
              <h2 className="title">Đặt lại mật khẩu</h2>
              <input type="text" placeholder="Email" />
              <div className="btn rect main btn-next">Tiếp theo</div>
              <div className="back" />
              <div className="close">
                <img src="/img/close-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="popup-form popup-login" style={{display: 'none'}}>
          <div className="wrap">
            <h2 className="title">Đăng ký</h2>
            <div className="btn btn-icon rect white btn-google">
              <img src="/img/google.svg" alt="" />
              Google
            </div>
            <p className="policy">
              Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
            </p>
            <div className="close">
              <img src="/img/close-icon.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    )  
}
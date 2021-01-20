import React from 'react'
import { Link , useHistory} from 'react-router-dom'

export default function Header() {
  let history = useHistory();
  function loading(e) {
    e.preventDefault();
    document.querySelector('.loading').classList.add('active')
    setTimeout(()=> {
      history.push(e.target.href?.replace(window.location.origin,'') || '/')
    },200)
    setTimeout(() => {
      document.querySelector('.loading').classList.remove('active')
    },800)
  }
  
    return (
        <>
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
          <Link  onClick={loading} to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
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
                <Link onClick={loading} to="/chi-tiết ">Khóa học của tôi</Link>
                <Link onClick={loading} to="/thông-tin-cá-nhân">Thông tin tài khoản</Link>
                <Link onClick={loading} to="/">Đăng xuất</Link>
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
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/team">CFD Team</Link>
            </li>
            <li>
              <Link to="/khóa-học">Khóa Học</Link>
            </li>
            <li>
              <Link to="/dự-án">Dự Án</Link>
            </li>
            <li>
              <Link to="/liên-hệ">Liên hệ</Link>
            </li>
          </ul>
        </nav>
        </>
    )
}

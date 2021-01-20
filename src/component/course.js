import React from 'react'
import { Link } from 'react-router-dom'

export default function Course(props) {
    return (
        <>
        <div className="col-md-4 course">
                  <div className="wrap">
                    <a className="cover" href="dwdswd">
                      <img src={props.thumbnail} alt="" />
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
                      <a className="name" href="wewew">
                        {props.name}
                      </a>
                      <p className="des">
                        {props.description}
                      </p>``
                    </div>
                    <div className="bottom">
                      <div className="teacher">
                        <div className="avatar">
                          <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">Trần Nghĩa</div>
                      </div>
                      <Link to="/đăng-ký" className="register-btn">Đăng Ký</Link>
                    </div>
                  </div>
                </div>
        </>
    )
}

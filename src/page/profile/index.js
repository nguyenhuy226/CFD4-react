import React from 'react'
import { Route, Switch , Redirect} from 'react-router-dom'
import Coin from './components/coin'
import Coures from './components/coures'
import Info from './components/info'
import Menu from './components/menu'
import Payment from './components/payment'
import Project from './components/project'

export default function Profile() {
  let login =true
  if(!login){
    return <Redirect to="/" />
  }
  return (
    <>
      <div className="overlay_nav" />
      <main className="profile" id="main">
        <section>
          <div className="top-info">
            <div className="avatar">
              {/* <span class="text">H</span> */}
              <img src="/img/avatar-lg.png" alt="" />
              <div className="camera" />
            </div>
            <div className="name">trần nghĩa</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
          </div>
          <div className="container">
            <div className="tab">
              <Menu />
              <div className="tab-content">
                <Switch>
                  <Route path="/thông-tin-cá-nhân/khóa-học"><Coures /></Route>
                  <Route path="/thông-tin-cá-nhân/dự-án"><Project /></Route>
                  <Route path="/thông-tin-cá-nhân/thanh-toán"><Payment /></Route>
                  <Route path="/thông-tin-cá-nhân/giá"><Coin /></Route>
                  <Route path="/thông-tin-cá-nhân/"><Info /></Route>
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

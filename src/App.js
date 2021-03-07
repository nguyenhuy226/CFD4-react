// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './asset/css/style.scss'
import Home from './page/home';
import Detail from './page/detail';
import Profile from './page/profile';
import Fales from './page/404';
import Header from './component/header';
import Footer from './component/footer'
import Loading from './component/loading';
import register from './page/register'
import Team from './page/team'
import Coures from './page/coures';
import Project from './page/project';
import Email from './page/email';
import PopupLogin from './component/PopupLogin';
import React, {useRef} from 'react'
import AuthProvider from './core/hook/useAuth';
import PrivateRouter from './core/PrivateRouter';
import PopupRegister from './component/PopupRegister';

export const Context = React.createContext({})


function App() {
  let refLogin = useRef()
  let refRegister = useRef()
  function openPOpupRegister() {
    refLogin.current.style.display= 'none'
    refRegister.current.style.display= 'flex'
  }
  function closePopupRegister() {
    refRegister.current.style.display= 'none'
  }
  function openPopupLogin() {
    refLogin.current.style.display= 'flex'
    refRegister.current.style.display= 'none'
  }
  function closePopupLogin() {
    refLogin.current.style.display= 'none'
  }


  return <AuthProvider>
    <Context.Provider value={{openPopupLogin,closePopupLogin,openPOpupRegister,closePopupRegister}}>
    <BrowserRouter>
      <PopupLogin  ref={refLogin}/>
      <PopupRegister  ref={refRegister}/>
      <Header />
      <Loading />
      <Switch>
        <PrivateRouter path="/đăng-ký/:slug" component={register} />
        <Route path="/chi-tiết" component={Detail} />
        <PrivateRouter path="/thông-tin-cá-nhân" component={Profile} />
        <Route path="/team" component={Team} />
        <Route path="/khóa-học" component={Coures} />
        <Route path="/dự-án" component={Project} />
        <Route path="/liên-hệ" component={Email} />
        <Route path="/" exact component={Home} />
        <Route component={Fales} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </Context.Provider>
  </AuthProvider> 
}

export default App;

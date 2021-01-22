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


function App() {
  return <BrowserRouter>
    <PopupLogin />
    <Header />
    <Loading />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/đăng-ký" component={register}/>
      <Route path="/chi-tiết" component={Detail}/>
      <Route path="/thông-tin-cá-nhân" component={Profile}/>
      <Route path="/team"  component={Team}/>
      <Route path="/khóa-học" component={Coures}/>
      <Route path="/dự-án" component={Project}/>
      <Route path="/liên-hệ" component={Email}/>
      <Route component={Fales}/>
    </Switch>
    <Footer />
  </BrowserRouter>
}

export default App;

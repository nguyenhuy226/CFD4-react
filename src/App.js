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


function App() {
  return <BrowserRouter>
    <Header />
    <Loading />
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/đăng-ký" component={register}/>
      <Route path="/chi-tiết">
        <Detail />
      </Route>
      <Route path="/thông-tin-cá-nhân">
        <Profile />
      </Route>
      <Route>
        <Fales />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
}

export default App;

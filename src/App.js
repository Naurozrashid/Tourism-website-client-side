import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Register from './Component/Resgister/Register';
import Login from './Component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Aboutus from './Component/Aboutus/Aboutus';
import Notfound from './Component/Notfound/Notfound';


function App() {
  return (
    <div>
     <Router>
       <AuthProvider>
      <Header></Header>
        <Switch>
          <Route exact  path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/aboutus">
          <Aboutus></Aboutus>
          </Route>
           <Route path="/login">
            <Login></Login>
          </Route> 
           <Route path="/register">
             <Register></Register>
          </Route>  
           <Route path="*">
             <Notfound></Notfound>
          </Route>  
            
        </Switch>
        <Footer></Footer>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

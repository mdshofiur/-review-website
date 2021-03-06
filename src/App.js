import React from 'react';
import Header from './components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import ServiceData from './components/ServiceData/ServiceData';

function App() {
  return (
  <div className="App">
      


<Router>
<Header></Header>
 <Switch>
 <Route exact path="/home">
     <Home></Home>
   </Route>
   <Route exact path="/">
     <Home></Home>
   </Route>
   <Route path="/services">
     <ServiceData></ServiceData>
   </Route>
   <Route path="/about">
     <About></About>
   </Route>
   <Route path="/blog">
      <Blog></Blog>
   </Route> 
   <Route path="*">
     <Error404></Error404>
   </Route>
 </Switch>
 <Footer></Footer>
</Router>




    </div>
  );
}

export default App;

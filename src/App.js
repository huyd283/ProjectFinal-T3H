import React from 'react';
import Home from './pages/Home';
import Header from './Components/ShareComponents/Header';
import Footer from './Components/ShareComponents/Footer';
import Blog from './pages/Blog';
import BlogDetail from './pages/Blog-Detail';

function App() {
  return (

    <React.Fragment>
    <Header/>
    {/* <Home></Home> */}
    {/* <Blog/> */}
    <BlogDetail/>
    <Footer/>
   </React.Fragment>
  )
}

export default App;

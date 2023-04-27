import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './Pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsPage from './Pages/NewsPage';
import AppPage from './Pages/Appspage';
import ViewPage from './Pages/ViewPage';
import BlankPage from './Pages/BlankPage';

function App() {

  return (
    <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Blank' element={<BlankPage/>}></Route>
          <Route path={`/View/:id`} element={<ViewPage/>}></Route>
          <Route path='/News' element={<NewsPage/>}></Route>
          <Route path='/Apps' element={<AppPage/>}></Route>
        </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DesignPage from './components/pages/DesignPage';
import SignUpPage from './components/pages/SignUpPage';
import Home from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import NotFound from './components/pages/NotFound'
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/design" element={<DesignPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route component={NotFound} />
      </Routes>
    </Router>
    // <>
    // <Navbar/>
    // <>
    // <SignUpPage/>
    // {/* <DesignPage/> */}
    // {/* <ContentSection/>
    // <LoginForm/> */}
    // </>
    // </>
  );
}

export default App;

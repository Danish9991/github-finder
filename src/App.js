import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import {GithubProvider} from './context/github/GihubContext';
import { AlertProvider } from './context/alert/AlertContext';
import User from './pages/User';
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
    <Router>
     <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='container mx-auto px-3 pb-12 text-white'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:login' element={<User />} />
          <Route path='/notFound' element={<Notfound />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>

  )
}

export default App;

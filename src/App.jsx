import Navbar from './components/Navbar/Navbar'
import BentoGrid from './components/BentoGrid/BentoGrid'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="site-shell" id="home">
      <Navbar />
      <main>
        <BentoGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App

import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { MainRouter } from './router/MainRouter'

function App() {
  return (
    <>
      <NavBar />
      <MainRouter />
      <Footer />
    </>
  )
}

export default App

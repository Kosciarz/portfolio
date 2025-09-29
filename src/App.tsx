import './App.css'
import ProjectsList from "./components/ProjectsList.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <div className="main-content">
      <Header/>
      <ProjectsList/>
      <Footer/>
    </div>
  )
}

export default App

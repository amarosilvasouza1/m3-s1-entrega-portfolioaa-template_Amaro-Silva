import './reset.css'
import './global.css'
import './button.css'
import Header from "./componets/Header"
import SectionWelcome from './componets/section/SectionWelcome'
import SectionAbout from './componets/section/SectionAbout'
import SectoinTechnology from './componets/section/SectoinTechnology'
import SectionProjects from './componets/section/SectionProjects'
import Footer from './componets/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
      <SectionWelcome />
      <SectionAbout />
      <SectoinTechnology />
      <SectionProjects />
      </main>
      <Footer />
    </>
  )
}

export default App

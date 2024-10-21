import './App.css'
import { Aboutme } from './assets/Component/Aboutme'
import { Award } from './assets/Component/Award'
import { Contact } from './assets/Component/Contact'
import { Experiences } from './assets/Component/Experiences'
import { Heros } from './assets/Component/Heros'
import { Icanhelp } from './assets/Component/Icanhelp'
import { Navbarx } from './assets/Component/Navbarx'
import { Project } from './assets/Component/Project'
import { Techskills } from './assets/Component/Techskills'

function App() {


  return (
    <>
<div >
      <Navbarx />

      {/* Section Me */}
      <section id="me" >
        <Heros />
        <Aboutme />
        <Icanhelp />
        <Techskills />
      </section>

      {/* Section Experiences */}
      <section id="experiences" >
        <Experiences />
      </section>

      {/* Section Project */}
      <section id="project">
        <Project />
      </section>

      {/* Section Awards */}
      <section id="awards" >
        <Award />
      </section>

      {/* Section Contact */}
      <section id="contact" >
        <Contact />
      </section>
    </div>
    </>
  )
}

export default App

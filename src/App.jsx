import { useState } from 'react'
import './App.css'
import ProjectCarousel from './components/ProjectCarousel';

function App() {

  return (
    <div className="container">
      <header>
        <img src={'/harsehaj-photo.jpg'} className="profile-photo" alt="Harsehaj photo" />
        <h1>hi, i'm harsehaj</h1>
        <p className="location">🩵 chapel hill</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/harsehaj/" className="social-link">
            my linkedin
          </a>
        </div>
      </header>

      <section className="about">
        <h2>more about me</h2>
        <p>i build to solve real problems, ones that affect the <b>livelihood of millions.</b> from building a healthtech startup from 0 to 1, to scraping together my own side projects, i learn, code and improve all for the sake of making life better, meaningfully. <br/><br/>

my <b>bias towards action</b> helps bring these ambitions into fruition. i hop on interviews with families i serve, build and test prototypes, and seek feedback for each iteration. i can learn anything, from programming with tensorflow to designingvrR environments, but my empathy trumps all. i build for people, and i know what they need because i care about them.  <br/><br/>

i come from a low-income immigrant family, and <b>i know how hard life can get. </b> i build so another teen doesn't have to cower in fear at a pride parade. i build so another mother doesn't have to hide her mental struggle from her family. i build so another child doesn't have to watch their grandpa never recover from a stroke. <br/><br/>

i build with empathy and a <b>fierce passion for social good.</b></p>
      </section>
      <div>
          <h2>my projects</h2>
          <ProjectCarousel />
        </div>
    </div>
  )
}

export default App

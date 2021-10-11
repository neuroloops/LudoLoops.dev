import * as React from 'react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div>Ludovic Dumas</div>
      <div>
        <aside className='resume'>
          <h2>Contact</h2>
          <ul>
            <li>Franconville - Paris</li>
            <li>ludoloops@protonmail.com </li>
            <li>https://github.com/neuroloops</li>
            <li>https://www.linkedin.com/in/ludovic-dumas/</li>
          </ul>
          <h2>Qualité personnelles</h2>
          <ul>
            <li>Adaptation</li>
            <li>Autonome</li>
            <li>Pluridisciplinaire</li>
            <li>Rigoureux</li>
            <li>Studieux</li>
          </ul>
          <h2>FrontEnd</h2>
          <ul>
            <li>Angular</li>
            <li>React</li>
            <li>CSS • LESS • SASS </li>
          </ul>
          <h2>Backend</h2>
          <ul>
            <li>Proxmox</li>
            <li>Docker</li>
            <li>Heroku</li>
            <li>GNU/Linux</li>
          </ul>
          <h2>Outils</h2>
          <ul>
            <li>Vscode</li>
            <li>Postman</li>
            <li>Webpack</li>
            <li>Git</li>
            <li>notion.so</li>
          </ul>
        </aside>
        <div>
          <h2>Compétence</h2>
          <ul>
            <li>
              Analyser les besoins et objectifs d’un client et les traduire
              techniquement - cahier des charges fonctionnel et technique
            </li>
            <li>
              Initier, cadrer et lancer un projet web - cadrage du besoin client
              / Panification
            </li>
            <li>
              Travailler en équipe avec méthodologie et cohésion avec le groupe
            </li>
            <li>
              Pédagogue en retransmettant des connaissances et aidant à la
              propagation du savoir
            </li>
          </ul>
          <h2>Formations</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

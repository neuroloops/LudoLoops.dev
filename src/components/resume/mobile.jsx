import * as React from 'react'

import '../../styles/resume.scss'
import myPic from '../../assets/images/Ludo_with_logo.png'
import ExtLink from '../../assets/svg/extLink'
import github from '../../assets/svg/github-fill.svg'
import linkedin from '../../assets/svg/linkedin-fill.svg'
import astronomie from '../../assets/svg/astronomie.svg'
import code from '../../assets/svg/code.svg'
import cuisine from '../../assets/svg/cuisine.svg'
import moto from '../../assets/svg/moto.svg'
import canada from '../../assets/svg/canada.svg'
import japon from '../../assets/svg/japon.svg'
import images from '../../assets/images'

const IndexPage = () => {
  console.log('where are on Mobile')
  // console.table(images)

  return (
    <div className='wrapper'>
      <div className='name'>
        <h1>
          Ludovic <span>Dumas</span>
        </h1>
        <p>Alternance Admin & Sécurité Réseaux, cloud</p>
        <p className='subtext'>Mobilité: international</p>
      </div>
      <div className='contact'>
        <div className='city'>
          <p>Franconville - Paris</p>

          <a href='tel:+33668196384'>
            06.68.19.63.84 <ExtLink className='extLink' />
          </a>
        </div>
        <div>
          <a
            href='mailto:ludoloops@protonmail.com'
            target='_blank'
            rel='noreferrer'
            title='email'
          >
            ludoloops@protonmail.com
          </a>

          <div className='logo'>
            <a
              href='https://github.com/neuroloops'
              rel='noreferrer'
              target='_blank'
              title='github'
            >
              {/* <img src={images[`${code}.svg`].default} alt='github logo' /> */}
            </a>
            <a
              href='https://www.linkedin.com/in/ludovic-dumas'
              target='_blank'
              title='linkedin'
              rel='noreferrer'
            >
              <img src={linkedin} alt='Linkedin Logo' />
            </a>
          </div>
        </div>
      </div>
      <div className='photo'>
        <img src={myPic} alt='' />
      </div>
      <div className='perso'>
        <ul>
          <li>adaptatif</li>
          <li>Autonome</li>
          <li>Rigoureux</li>

          <li>Studieux</li>
          <li>pluricompétent</li>
        </ul>
      </div>
      <div className='competences'>
        <h2>Compétences</h2>
        <hr />
        <ul>
          <li>
            <b>Analyser les besoins et objectifs</b> d’un client et les traduire
            techniquement - cahier des charges fonctionnel et technique
          </li>
          <li>
            <b>Initier, cadrer et lancer un projet web</b> - cadrage du besoin
            client / Panification
          </li>
          <li>
            <b>Travailler en équipe </b>avec méthodologie et cohésion avec le
            groupe
          </li>
          <li>
            <b>Pédagogue </b>en retransmettant des connaissances et aidant à la
            propagation du savoir
          </li>
        </ul>
      </div>
      <div className='skills'>
        <div className='hardSkills'>
          <h2>FrontEnd</h2>
          <hr />
          <ul>
            <li>Angular</li>
            <li>React</li>
            <li>CSS • LESS • SASS </li>
          </ul>
          <h2>backend</h2>
          <hr />
          <ul>
            <li>Auth0</li>
            <li>REST aPI</li>
            <li>Database • sql • MangoDB </li>
            <li>Nodejs • express • nextjs</li>
          </ul>
        </div>
        <div className='softSkills'>
          <h2>devops</h2>
          <hr />
          <ul>
            <li>Proxmox</li>
            <li>Docker</li>
            <li>Heroku</li>
            <li>GNU/Linux</li>
          </ul>
          <h2>Outils</h2>
          <hr />
          <ul>
            <li>Vscode</li>
            <li>Postman</li>
            <li>Webpack</li>
            <li>Git</li>
            <li>notion.so</li>
          </ul>
        </div>
      </div>
      <Formations />
      <ExpPro />
    </div>
  )
}

export default IndexPage

function Formations() {
  return (
    <section className='formations'>
      <h2>formations</h2>
      <hr />
      <ul>
        {formations.map(formation => {
          return (
            <li>
              <span>{formation.year}</span>
              <div>
                <p>{formation.title}</p>
                <i>{formation.description}</i>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function ExpPro() {
  return (
    <div className='formations'>
      <h2>Expériences professionnelles</h2>
      <hr />
      <ul>
        {expPro.map(exp => {
          return (
            <li>
              <span>{exp.year}</span>
              <div>
                <p>{exp.title}</p>
                <i>{exp.description}</i>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const formations = [
  {
    year: 2021,
    title: '<b>Développeur Web</b> - RNCP 3 (Bac+2)',
    description: 'openClassrooms - France - e-learning',
  },
  {
    year: 2019,
    title: 'CS50 computer Science',
    description: 'Harvard - e-learning',
  },
  {
    year: 2016,
    title: ' introduction to <b>cyber security</b>',
    description: 'The open University - e-learning',
  },
]

const expPro = [
  {
    year: '2020 • actuel',
    title: '<b>Développeur</b> web et iot',
    description: 'Incom Delta • France',
  },
  {
    year: '2020 • actuel',
    title: 'Micro-entreprise',
    description: 'LudoLoops • France',
  },
  {
    year: '2017 • 2018',
    title: 'Responsable de ferme de <b>crypto-monnaie</b>',
    description: 'St-Sauver • Canada',
  },
  {
    year: '2013 • 2017',
    title: '<b>Technicien </b> informatique et électronique',
    description: 'ThoughtTechnologie, Montréal • Canada',
  },
  {
    year: '2010 • 2013',
    title: '<b>Vendeur </b>- spécialise en électronique',
    description: 'La Source, Montréal et Vancouver • Canada',
  },
  {
    year: '2009 • 2010',
    title: "Commis à l'inventaire",
    description: 'Dollarama, Montréal • Canada',
  },
  {
    year: '2006 • 2009',
    title: 'Technicien en <b>Télécommunications</b>',
    description: 'Armée de l’air, Varennes sur allier • France',
  },
]

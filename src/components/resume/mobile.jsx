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
import { formations } from './data/formations'
import { expPro } from './data/expPro'

const IndexPage = () => {
  console.log('where are on Mobile')

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
            <li>REST API</li>
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
      <YearList title='formations' data={formations} />
      <YearList title='Expériences professionnelles' data={expPro} />
      <h2>intérêts et loisirs</h2>
      <hr />
      <div className='loisirs'>
        <div className='espace'>
          <img src={astronomie} alt='astronomie' />
          <p>
            <br />
            espace
          </p>
        </div>

        <div className='cuisine'>
          <img src={cuisine} alt='cuisine' />
          <p>
            <br />
            cuisine
          </p>
        </div>
        <div className='moto'>
          <img src={moto} alt='moto' />
          <p>
            <br />
            moto
          </p>
        </div>
      </div>
      <div className='loisirs'>
        <div className='code'>
          <img src={code} alt='code' />
          <p>
            <br />
            code
          </p>
        </div>
        <div className='canada'>
          <img src={canada} alt='canada flag' />
          <p>
            anglais <br />
            CERCL C1
          </p>
        </div>
        <div className='japon'>
          <img src={japon} alt='japan flag' />
          <p>
            Japonais
            <br />
            débutant
          </p>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

const YearList = props => {
  const { title, data } = props
  return (
    <section className='formations'>
      <h2>{title}</h2>
      <hr />
      <ul>
        {data.map((item, index) => {
          return <ListItem key={index} {...item} />
        })}
      </ul>
    </section>
  )
}

const ListItem = ({ year, title, description }) => {
  return (
    <li>
      <span>{year}</span>
      <div>
        <p>{title}</p>
        <i>{description}</i>
      </div>
    </li>
  )
}

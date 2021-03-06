import * as React from 'react'
import styled from '@emotion/styled'
// import { css } from '@emotion/react'
import '../../styles/resume.scss'

import myPic from '../../assets/images/Ludo_with_logo.png'
import ExtLink from '../../assets/svg/extLink'
import astronomie from '../../assets/svg/astronomie.svg'
import code from '../../assets/svg/code.svg'
import cuisine from '../../assets/svg/cuisine.svg'
import moto from '../../assets/svg/moto.svg'
import canada from '../../assets/svg/canada.svg'
import japon from '../../assets/svg/japon.svg'

const Desktop = () => {
  console.log('where are on desktop')
  return (
    <Wrapper>
      <Header>
        <div className='photo'>
          <img src={myPic} alt='' />
        </div>
        <section>
          <h1>
            Ludovic <span>Dumas</span>
          </h1>
          <p>Alternance Admin & Sécurité Réseaux, cloud</p>
          <p className='subtext'>Mobilité: international</p>
        </section>
      </Header>
      <Main>
        <Aside>
          <h2>Contact</h2>
          <hr />
          <ul>
            <li>Franconville - Paris</li>

            <li>
              <a href='mailto:ludoloops@protonmail.com'>
                ludoloops@protonmail.com <ExtLink className='extLink' />
              </a>
            </li>
            <li>
              <a href='tel:+33668196384'>
                06.68.19.63.84 <ExtLink className='extLink' />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/neuroloops'
                rel='noreferrer'
                target='_blank'
              >
                github.com/neuroloops <ExtLink className='extLink' />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/ludovic-dumas'
                rel='noreferrer'
                target='_blank'
              >
                linkedin.com/in/ludovic-dumas <ExtLink className='extLink' />
              </a>
            </li>
          </ul>
          <h2>Personnalité</h2>
          <hr />
          <ul>
            <li>adaptatif</li>
            <li>Autonome</li>
            <li>Rigoureux</li>
            <li>Studieux</li>
            <li>pluricompétent</li>
          </ul>
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
            <li>Database • sql • MongoDB </li>
            <li>Nodejs • express • nextjs</li>
          </ul>
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
        </Aside>
        <Section>
          <h2>Compétences</h2>
          <hr />
          <UlCompetence>
            <li>
              <b>Analyser les besoins et objectifs</b> d’un client et les
              traduire techniquement - cahier des charges fonctionnel et
              technique
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
              <b>Pédagogue </b>en retransmettant des connaissances et aidant à
              la propagation du savoir
            </li>
          </UlCompetence>
          <h2>Formations</h2>
          <hr />
          <ul>
            <li>
              <span>2021</span>
              <div>
                <p>
                  <b>Développeur Web</b> - RNCP 3 (Bac+2)
                </p>
                <i>openClassrooms - France - e-learning</i>
              </div>
            </li>
            <li>
              <span>2019</span>
              <div>
                <p>CS50 computer Science</p>
                <i>Harvard - e-learning</i>
              </div>
            </li>
            <li>
              <span>2016</span>
              <div>
                <p>
                  introduction to <b>cyber security</b>
                </p>
                <i>The open University - e-learning</i>
              </div>
            </li>
            <li></li>
          </ul>
          <h2>Expériences professionnelles</h2>
          <hr />
          <ul>
            <li>
              <span>2020 • actuel</span>
              <div>
                <p>
                  <b>Développeur</b> web et iot
                </p>
                <i>Incom Delta • France</i> 🇫🇷
              </div>
            </li>
            <li>
              <span>2020 • actuel</span>
              <div>
                <p>Micro-entreprise</p>
                <i>LudoLoops • France</i> 🇫🇷
              </div>
            </li>
            <li>
              <span>2017 • 2018</span>
              <div>
                <p>
                  Responsable de ferme de <b>crypto-monnaie</b>
                </p>
                <i>St-Sauver • Canada</i> 🇨🇦
              </div>
            </li>
            <li>
              <span>2013 • 2017</span>
              <div>
                <p>
                  <b>Technicien </b>
                  informatique et électronique
                </p>
                <i>ThoughtTechnologie, Montréal • Canada</i> 🇨🇦
              </div>
            </li>
            <li>
              <span>2010 • 2013</span>
              <div>
                <p>
                  <b>Vendeur </b>- spécialise en électronique
                </p>
                <i>La Source, Montréal et Vancouver • Canada</i> 🇨🇦
              </div>
            </li>
            <li>
              <span>2009 • 2010</span>
              <div>
                <p>Commis à l'inventaire</p>
                <i>Dollarama, Montréal • Canada</i> 🇨🇦
              </div>
            </li>
            <li>
              <span>2006 • 2009</span>
              <div>
                <p>
                  Technicien en <b>Télécommunications</b>
                </p>
                <i>Armée de l’air, Varennes sur allier • France</i> 🇫🇷
              </div>
            </li>
          </ul>
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

            <div className='code'>
              <img src={code} alt='code' />
              <p>
                <br />
                code
              </p>
            </div>
          </div>
          <div className='loisirs'>
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
        </Section>
      </Main>
    </Wrapper>
  )
}

export default Desktop

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  background: white;

  color: var(--txt-resume);
  font-size: 1.3125rem;

  ul {
    list-style-type: none;
  }

  h2 {
    margin-right: 1rem;
  }

  hr {
    margin-bottom: 0.75rem;
    width: 5rem;
    border: 0.2rem solid;
  }
`

const Header = styled.div`
  display: flex;
  padding-top: 4.5rem;

  .photo {
    flex: 0 1 513px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;

    & img {
      width: 12.125rem;
    }
  }
  section {
    text-align: right;
    flex: 1 0 60%;
    padding-right: 3.5rem;
    max-width: 800px;

    p {
      font-size: 1.5rem;
      margin-top: 0.625rem;
      padding-right: 0;
    }
    .subtext {
      font-size: 1.25rem;
      margin-top: 0.3125rem;
      margin-left: 0;
    }
  }
`

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 2rem;
`

const Aside = styled.aside`
  padding: 4.75rem 1.25rem 0;
  flex: 0 1 auto;
  .extLink {
    width: 1.2rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  color: white;
  background-color: var(--txt-resume);
  ul {
    margin-bottom: 3.25rem;
  }
  li {
    padding-left: 1.375rem;
    text-transform: capitalize;
    line-height: 3rem;
  }
  hr {
    background-color: white;
    color: white;
    border-color: white;
  }
`

const Section = styled.section`
  display: flex;
  flex: 0 0 50%;
  /* flex-basis: auto; */
  p {
    font-size: 1.3125rem;
  }
  flex-direction: column;
  padding-top: 4.75rem;
  padding-left: 2.3rem;
  margin-left: 1.25rem;
  margin-right: 3.5rem;
  border-top: 0.125rem solid var(--txt-resume);
  background: white;
  hr {
    background-color: var(--txt-resume);
    color: var(--txt-resume);
    border-color: var(--txt-resume);
  }
  li {
    display: flex;
    margin-bottom: 0.8125rem;
    & span {
      flex: 0 0 160px;
    }
    i {
      font-size: 1.3125rem;
      opacity: 75%;
    }
  }
`

const UlCompetence = styled.ul`
  line-height: 1.75rem;
  padding-left: 2.625rem;
  display: block !important;
  li {
    list-style-type: disc !important;
    display: list-item !important;
  }
`

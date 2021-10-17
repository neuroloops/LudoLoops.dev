import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import myPic from '../assets/images/Ludo_with_logo.png'
import ExtLink from '../assets/svg/extLink'

const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Header>
          <div className='photo'>
            <div className='imgContainer'>
              <img src={myPic} alt='' />
            </div>
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
                <a href='https://github.com/neuroloops'>
                  github.com/neuroloops <ExtLink className='extLink' />
                </a>
              </li>
              <li>
                <a href='http://https://www.linkedin.com/in/ludovic-dumas'>
                  linkedin.com/in/ludovic-dumas <ExtLink className='extLink' />
                </a>
              </li>
            </ul>
            <h2>Qualités personnelles</h2>
            <hr />
            <ul>
              <li>Adaptation</li>
              <li>Autonome</li>
              <li>Pluridisciplinaire</li>
              <li>Rigoureux</li>
              <li>Studieux</li>
            </ul>
            <h2>FrontEnd</h2>
            <hr />
            <ul>
              <li>Angular</li>
              <li>React</li>
              <li>CSS • LESS • SASS </li>
            </ul>
            <h2>Backend</h2>
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
                <b>
                  Analyser les besoins et objectifs d’un client et les traduire
                  techniquement{' '}
                </b>
                - cahier des charges fonctionnel et technique
              </li>
              <li>
                <b>Initier, cadrer et lancer un projet web</b> - cadrage du
                besoin client / Panification
              </li>
              <li>
                <b>Travailler en équipe </b>avec méthodologie et cohésion avec
                le groupe
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
                <span>2010 • présent</span>
                <div>
                  <p>
                    <b>Développeur</b> web et iot
                  </p>
                  <i>Incom Delta • France</i> 🇫🇷
                </div>
              </li>
              <li>
                <span>2020</span>
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
          </Section>
        </Main>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

const Wrapper = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  background: white;
  font-size: 1.25rem;
  color: var(--txt-resume);

  ul {
    list-style-type: none;
  }

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    margin-right: 1rem;
  }

  hr {
    margin-bottom: 0.75rem;
    width: 5rem;
    border: 0.2rem solid;
  }
`

const Header = styled.header`
  display: flex;

  .photo {
    display: flex;
    justify-content: center;
    flex: 0 0 40%;
    /* width: 26.125rem; */
    & img {
      width: 12.125rem;
    }
  }
  section {
    text-align: right;
    flex: 1 0 auto;
    padding-right: 3.5rem;
    h1 {
      display: flex;
      width: 100%;
      font-size: 4.5rem;
      color: var(--txt-resume);
      text-transform: uppercase;
      font-weight: 900;
      text-align: center;
      & span {
        font-weight: 400;
      }
    }
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
  padding-left: 1.25rem;
  padding-top: 4.75rem;
  flex: 0 0 auto;
  .extLink {
    width: 3vmin;
  }
  a {
    color: white;
    text-decoration: none;
  }
  color: white;
  background-color: var(--txt-resume);
  ul {
    margin-bottom: 6.25rem;
  }
  li {
    padding-left: 1.375rem;
  }
  hr {
    background-color: white;
  }
`

const Section = styled.section`
  display: flex;
  flex: 0 0 50%;
  /* flex-basis: auto; */

  flex-direction: column;
  padding-top: 4.75rem;
  padding-left: 2.3rem;
  margin-left: 1.25rem;
  margin-right: 3.5rem;
  border-top: 0.125rem solid var(--txt-resume);
  background: white;
  hr {
    background-color: var(--txt-resume);
  }
  li {
    display: flex;
    margin-bottom: 0.8125rem;
    & span {
      flex: 0 0 160px;
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

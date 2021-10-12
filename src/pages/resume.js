import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import myPic from '../assets/images/Ludo_with_logo.png'
// markup
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
              <li>ludoloops@protonmail.com </li>
              <li>https://github.com/neuroloops</li>
              <li>https://www.linkedin.com/in/ludovic-dumas/</li>
            </ul>
            <h2>Qualité personnelles</h2>
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
            <h2>Compétence</h2>
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
  max-width: ${595 * 2}px;
  margin: 0 auto;
  background: white;
  font-size: 20px;
  color: var(--txt-resume);

  ul {
    list-style-type: none;
  }

  h2 {
    text-transform: uppercase;
    font-size: 24px;
  }
  hr {
    margin-bottom: ${6 * 2}px;
    width: ${40 * 2}px;
  }
`
const Section = styled.section`
  flex-basis: auto;
  background: white;
  padding-top: ${63 * 2}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${11 * 2}px;
  margin-left: ${10 * 2}px;
  margin-right: ${28 * 2}px;
  border-top: ${1 * 2}px solid var(--txt-resume);
  hr {
    border: ${1 * 2}px solid var(--txt-resume);
  }
  li {
    display: flex;
    margin-bottom: ${13}px;
    & span {
      flex-basis: ${96 * 2}px;
    }
  }
  h2 {
    margin-top: 26px;
  }
`
const UlCompetence = styled.ul`
  line-height: ${14 * 2}px;
  padding-left: ${21 * 2}px;
  display: block;
  li {
    list-style-type: disc;
    display: list-item;
  }
`
const Main = styled.div`
  display: flex;
  width: 100%;
`
const Aside = styled.aside`
  flex-basis: ${209 * 2}px;
  padding-left: ${10 * 2}px;
  padding-top: ${38 * 2}px;
  /* width: ${209 * 2}px; */

  color: white;
  background-color: var(--txt-resume);
  ul {
    margin-bottom: ${25 * 2}px;
  }
  li {
    padding-left: ${11 * 2}px;
  }
  hr {
    border: ${1 * 2}px solid white;
  }
`
const Header = styled.header`
  display: flex;
  height: ${97 * 2}px;
  margin: 0 auto;
  h1 {
    font-size: ${36 * 2}px;
    color: var(--txt-resume);
    text-transform: uppercase;
    font-weight: 900;
    & span {
      font-weight: 400;
    }
  }
  p {
    font-size: 24px;
  }
  .subtext {
    font-size: 20px;
  }
  .photo {
    flex-basis: ${209 * 2}px;
    z-index: 99;
    display: flex;
    justify-content: center;

    & img {
      width: ${97 * 2}px;
    }
  }
  section {
    text-align: right;
  }
`

import { SiHtml5, SiCss3, SiJavascript, SiJirasoftware, SiTrello, SiPostman, SiBootstrap, SiGithub, SiAngular, SiJava, SiMysql, SiSpringboot, SiReact, SiOracle, SiPostgresql, SiMaterialui } from 'react-icons/si';
import Mh from '../../../assets/mindHub-1.png';
import Ch from '../../../assets/coderHouse1.jpg';
import Ap from '../../../assets/arg-p1.png';
import Egg from '../../../assets/egg-1.png';
import Utn from '../../../assets/utn.jpg';
import Ud from '../../../assets/udemy2.png';


export const EducationPage = () => {

  return (
    <section className='education__container'>

      <h2>My Studies</h2>

      <article className='container__son'>

        <div className='education__container__grid'>

          <div className="education__card">
            <div className="education__image">
              <div>
                <img src={ Mh } alt="mindhub logo"/>
              </div>
            </div>
            <div className="details details__mindhub">
              <div className="center">
                <div>
                  <h1>QA analyst<hr /><a href="https://mindhubweb.com/" target="_blank"><span>MindHub</span></a></h1>
                  <ul>
                    <li className='jira'><SiJirasoftware /></li>
                    <li className='trello'><SiTrello /></li>
                    <li className='postman'><SiPostman /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="education__card">
            <div className="education__image">
              <div>
                <img src={ Ch } alt="coder house logo"/>
              </div>
            </div>
            <div className="details details__coderhouse">
              <div className="center">
                <div>
                  <h1>Web Development<hr /><a href="https://www.coderhouse.es/" target="_blank"><span>Coder house</span></a></h1>
                  <ul>
                    <li className='html'><SiHtml5 /></li>
                    <li className='css'><SiCss3 /></li>
                    <li className='bst'><SiBootstrap /></li>
                    <li className='js'><SiJavascript /></li>
                    <li className='github'><SiGithub /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="education__card">
            <div className="education__image">
              <div>
              <img src={ Ap } alt="Argentina Programa logo"/>
              </div>
            </div>
            <div className="details details__ap">
              <div className="center">
                <div>
                  <h1>Full Stack Bootcamp<hr /><a href="https://www.argentina.gob.ar/economia/conocimiento/argentina-programa" target="_blank"><span>Argentina Programa</span></a></h1>
                  <ul>
                    <li className='html'><SiHtml5 /></li>
                    <li className='css'><SiCss3 /></li>
                    <li className='js'><SiJavascript /></li>
                    <li className='angular'><SiAngular /></li>
                    <li className='java'><SiJava /></li>
                    <li className='spb'><SiSpringboot /></li>
                    <li className='mysql'><SiMysql /></li>
                    <li className='github'><SiGithub /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="education__card">
            <div className="education__image">
              <div>
              <img src={ Egg } alt="Egg Cooperation logo"/>
              </div>
            </div>
            <div className="details details__egg">
              <div className="center">
                <div>
                  <h1>Full Stack Bootcamp<hr /><a href="https://eggeducacion.com/es-AR/somos-egg/" target="_blank"><span>Egg Education</span></a></h1>
                  <ul>
                    <li className='html'><SiHtml5 /></li>
                    <li className='css'><SiCss3 /></li>
                    <li className='js'><SiJavascript /></li>
                    <li className='react'><SiReact /></li>
                    <li className='java'><SiJava /></li>
                    <li className='spb'><SiSpringboot /></li>
                    <li className='mysql'><SiMysql /></li>
                    <li className='github'><SiGithub /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="education__card">
            <div className="education__image">
              <div>
              <img src={ Utn } alt="Utn logo"/>
              </div>
            </div>
            <div className="details details__utn">
              <div className="center">
                <div>
                  <h1>Sql avanzado<hr /><a href="https://www.frc.utn.edu.ar/" target="_blank"><span>UTN - UNC</span></a></h1>
                  <ul>
                    <li className='mysql'><SiMysql /></li>
                    <li className='oracle'><SiOracle /></li>
                    <li className='postgre'><SiPostgresql /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="education__card">
            <div className="education__image">
              <div>
              <img src={ Ud } alt="Utn logo"/>
              </div>
            </div>
            <div className="details details__udemy">
              <div className="center">
                <div>
                  <h1>Angular de Cero a Experto<hr /><a href="https://www.udemy.com/" target="_blank"><span>Udemy</span></a></h1>
                  <ul>
                    <li className='angular'><SiAngular /></li>
                    <li className='angm'><SiAngular /></li>
                    <li className='github'><SiGithub /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="education__card">
            <div className="education__image">
              <div>
              <img src={ Utn } alt="Utn logo"/>
              </div>
            </div>
            <div className="details details__udemy">
              <div className="center">
                <div>
                  <h1>React de Cero a Experto<hr /><a href="https://www.udemy.com/" target="_blank"><span>Udemy</span></a></h1>
                  <ul>
                    <li className='react'><SiReact /></li>
                    <li className='angm'><SiMaterialui /></li>
                    <li className='github'><SiGithub /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </article>
    </section>
  )
}
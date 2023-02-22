// import { FaAward, FaUserFriends, FaUserGraduate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ME from '../../../assets/ImgMeFontana1.jpg';


export const AboutPage = () => {
  return (
    <section className='about' >

      <div className="about__container">  
      
        <div className="about__content">

          <div className="about__cards">
            
            <article className='education__article'>
              <Link to="/education" className="about__card">
                <h2>Education</h2>  
                {/* <span>+1 Education Experience</span> */}
              </Link>
              <Link to="/projects" className="about__card">
                <h2>Projects</h2>
                {/* <span>+1 Build Projects</span>   */}
              </Link>
            </article>
            <p>
                In this portfolio you will have find a bit about me, like my Courses and some of the Projects that I work on, 
                since my very first one "Whaiheke". <br />
                Isn't all in here so you might have a look in my GitHub as well. Due to my previous career I have strong aptitude for
                team work and a natural predisposition to attend to any needs that others might have. I'm a creative,
                organized, punctual and flexible person.
                Thanks for passing by!
            </p>
            <div className="container__button">    
              <Link href="#" className="button" to="/contact">
              <div className="button__line"></div>
              <div className="button__line"></div>
              <span className="button__text">CONTACT ME</span>
              </Link>
            </div>
          </div>

          <div className="about__img">
            <img className='img'  src={ ME } alt="photo" />  
          </div>
        </div>

      </div>
    </section>
  )
}



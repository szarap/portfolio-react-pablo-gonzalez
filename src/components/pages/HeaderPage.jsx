import { useEffect, useState, } from 'react';
import { useNavigate } from 'react-router-dom';

import { DownloadPage, SocialPage } from '../header/header-components';
import { AboutPage, ContactPage, EducationPage, ProjectsPage } from './';



export const HeaderPage = () => {

  const toRotate = ["Web Developer", "Web Designer", "Content Creator", "UX/Ui Designer"]

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [letter, setLetter] = useState(300 - Math.random() * 100);
  const time = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, letter)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setLetter(prevLetter => prevLetter / 2)
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setLetter(time);
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setLetter(900);
    }
  }

  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/login', {
      replace: true
    })
  }

  return (

    <>
    
    <header>
        <section className='header__son'>

          <div className='img__logo'>
            <img src="../assets/logo.svg" alt="logo" />
          </div>

          <button className='header__logout'
            onClick={onLogout}>
            Logout
          </button>

          <section className='header__container'>
            <div className='header__content'>
              <div className='header__content__fs'>
                <h1>Hi I'm Pablo Gonzalez </h1>
              </div>
              <h2 className='header__wrap'><span>{text}</span></h2>
            </div>

            <div className='header__text_container'>
              <div className='header__text'>
                <p >I am a Frontend Developer looking for my first IT work experience.</p>
                <p>It was during the pandemic that decided to push my career as a web developer furthermore. This path has taken me 2 years
                  within different technologies of Frontend and Backend.</p>
                <p> I have worked on projects on my own, and continue to doing it. However, I am looking forward to fully dedicate myself
                  to work in this industry as part of a team and I'm excited to learn new skills and develop my professional career in a
                  Full Stack profile.</p>
                <span>Thank you to visit my profile.</span>
              </div>
            </div>
            <DownloadPage />
            <SocialPage className='container__wrap' />

          </section>

          {/* <SocialPage className='container__wrap' /> */}

        </section>
    </header>
      <AboutPage />
      <ProjectsPage />
      <EducationPage />
      <ContactPage/>
      </>
  )
}







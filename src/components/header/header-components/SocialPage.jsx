import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiNetlify } from 'react-icons/si';
import { AiOutlineDownload } from 'react-icons/ai';
import CV from "../../../../assets/Pablo_Gonzalez_EN_23.pdf";




export const SocialPage = () => {

    return (
        <>
        <div  className='header__social__container'>
            <div className="social__container">
                <Link to="https://www.linkedin.com/in/pablo-emanuel-gonzalez/" target="_blank"><BsLinkedin/></Link>
                <Link to="https://github.com/szarap" target="_blank"><BsGithub/></Link>
                <Link to="https://app.netlify.com/teams/szarap/overview" target="_blank"><SiNetlify/></Link>
                <Link to={ CV }><AiOutlineDownload/></Link>
                {/* TODO: icon email to redirect to contact form in spa */}
            </div>
        </div>
        </>
  )
}
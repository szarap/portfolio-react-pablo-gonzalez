import { useState } from "react";
import { ProjectModal } from "./ProjectModal";


export const ProjectCard = ({
    id,
    name,
    owner,
    date,
    link,
    github,
    description,
    technologies,
    additional,
    slogan,
    // TODO:remade modal to use all data from json
}) => {

    const projectImageUrl = `/assets/projects/${ id }.jpg`;

    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>

           {/*  <div className="card__container">
                <div className="card">
                    <h2 className='card__title'>{ name }</h2>
                    <p>{ owner }</p>
                    <div className="card__pic">
                        <img src={ projectImageUrl } alt={ slogan } />
                    </div>
                    <ul className="project__ul">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="card__social">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-github"></i>
                    </div>
                
                    <button type="submit" className='card__button' onClick={ handleShow } >
                        open
                    </button> 
                </div>
            </div> */}


            {/* ========================================================== */}

       
                
            <div className="card">

                <button type="submit" onClick={handleShow} >
                    <div className="card__background">
                        <img src={projectImageUrl} alt={slogan} />
                    </div>
                </button>
                
                <div className="card__content">

                    <p className="card__category">{owner}</p>

                    <a href={link} target="_blank"> <h3 className="card__heading">{name}</h3>   </a>
                </div>

            </div>
            
  

            <ProjectModal show={ show } handleClose={ handleClose } description={ description } name={name} github={github} link={link} date={date}/>
      


        </>


    )
}




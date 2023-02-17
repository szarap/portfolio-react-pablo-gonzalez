
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
// import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";

import '../../../styles.css';
import { AboutPage } from "../../../components/pages";





export const Navbar = () => {



    return (

        <nav>
            <Link
                className="navbar-brand" to="/" >
                <FontAwesomeIcon icon={faEarthAmericas} />
            </Link>

            <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/about" >
                <FontAwesomeIcon icon={faUserAstronaut} />
            </NavLink>

            <NavLink
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/contact" >
                <FontAwesomeIcon icon={faUserCircle} />
            </NavLink>

            <NavLink
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/education" >
                <FontAwesomeIcon icon={faLaptopCode} />
            </NavLink>

          {/*   <NavLink
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/services" >
                <FontAwesomeIcon icon={faComputerMouse} />
            </NavLink>
 */}
            <NavLink
                className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                to="/projects" >
                <FontAwesomeIcon icon={faFolderClosed} />
            </NavLink>


        </nav>


    )

}
//end

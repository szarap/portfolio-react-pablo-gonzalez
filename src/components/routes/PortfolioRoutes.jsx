import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { LoginPage } from "../auth"
import { AboutPage, ContactPage, EducationPage,HeaderPage, ProjectsPage, ServicesPage } from "../pages"



export const PortfolioRoutes = () => {
    return (

        <>
            <Navbar />
           

            <Routes>
                <Route path="header" element={<HeaderPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="education" element={<EducationPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="services" element={<ServicesPage />} />

                <Route path="login" element={<LoginPage />} />

                <Route path="/" element={<Navigate to="/header" />} />
            </Routes>
        </>
    )
}

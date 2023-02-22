import { ProjectCard } from "./"
import { getProjectByOwner } from "../../helpers"



export const ProjectList = ({ owner }) => {

    const projects = getProjectByOwner( owner )

    return (
        <>
            <div className="projects__container">
                <h2>My Projects</h2>
                <article className="project__son">  
                    <div className="card__grid">

                        {
                            projects.map(project => (


                                <ProjectCard
                                    key={project.id}
                                    {...project}
                                />

                            ))
                        }
                    </div>
                </article>
            </div>

        </>

    )
}

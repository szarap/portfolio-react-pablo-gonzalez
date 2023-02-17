import { ProjectCard } from "./"
import { getProjectByOwner } from "../../helpers"



export const ProjectList = ({ owner }) => {

    const projects = getProjectByOwner( owner )

    return (
        <>
            <div className='education__h1'>
                <h1>My Projects</h1>
            </div>

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

        </>

    )
}

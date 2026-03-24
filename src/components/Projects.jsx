import '../styles/Projects.css';

function Projects() {
    const projects = [

        {
            id:1,
            title: "Delivery Pizza",
            description: "In work 🚧",
            link: "https://github.com/0xK3rn3l-dev/delivery-pizza",
            image: "https://via.placeholder.com/300x200/8A2BE2/FFFFFF?text=Delivery+Pizza"
        },

        {
            id: 2,
            title: "Project Alpha",
            description: "In work 🚧",
            link: "https://github.com/0xK3rn3l-dev/project-alpha",
            image: "https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Project+Alpha"
        },

        {
            id: 3,
            title: "Project Beta",
            description: "In work 🚧",
            link: "https://github.com/0xK3rn3l-dev/project-beta",
            image: "https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Project+Beta"
        },

        {
            id: 4,
            title: "Project Gamma",
            description: "In work 🚧",
            link: "https://github.com/0xK3rn3l-dev/project-gamma",
            image: "https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Project+Gamma"
        },

        {
            id: 5,
            title: "Project Delta",
            description: "In work 🚧",
            link: "https://github.com/0xK3rn3l-dev/project-delta",
            image: "https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Project+Delta"
        },
        
    ]

    return (
        <>
            
            <h1 className='projects-title'>My projects</h1>
            <br />
            <div className="projects-scroll-container">
                <div className="projects-wrapper">
                {projects.map(project => (
                    <div key={project.id} className='project-card'>

                        {/* image */}
                        <div className='project-image-container'>
                            <img
                                className='project-image'
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="project-status">{project.description}</div>
                        </div>

                        {/* information */}
                        <div className='project-info'>
                            <h3 className="project-name">{project.title}</h3>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link"
                            >View Project 🔗
                            </a>
                        </div>

                    </div>
                ))}
                </div>
            </div>

        </>
    )

}

export default Projects;
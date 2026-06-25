import React from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
    return (
        <div className='bg-black'>
            <ProjectCard
                image={doodleDoc}
                title="DoodleDoc"
                description="A feature-rich online whiteboard with drawing tools, shapes, formatted text, undo/redo, room-based persistence and image export."

                techStack={[
                    "React",
                    "Tailwind",
                    "Konva",
                    "Zustand",
                ]}

                githubLink="https://github.com/Radhikagupta25/DoodleDoc"

                liveLink="https://your-demo-link.com"
            />
        </div>
    )
}

export default Projects
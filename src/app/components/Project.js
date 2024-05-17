import Image from "next/image";

const Project = ({ projects }) => {  
    {projects.map((project, index) => (
        <div key={index} className="grid-item">
          <Image src={project.src} alt={project.alt} width={200} height={200} />
          <p>{project.description}</p>
        </div>
      ))}
};

export default Project;
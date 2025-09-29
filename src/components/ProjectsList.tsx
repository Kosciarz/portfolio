import '/src/styles/ProjectsList.css'
import {FaGithub} from 'react-icons/fa'

interface Project {
  id: number;
  title: string;
  html_url: string;
}

function ProjectsList(): Element {
  const projects: Project[] = [
    {id: 1, title: "Ray Tracer", html_url: "https://github.com/Kosciarz/ray-tracer"},
    {id: 2, title: "Database", html_url: "https://github.com/Kosciarz/database"},
    {id: 3, title: "Web Server", html_url: "https://github.com/Kosciarz/web-server"},
    {id: 4, title: "ccwc", html_url: "https://github.com/Kosciarz/ccwc"},
    {id: 5, title: "File Compressor", html_url: "https://github.com/Kosciarz/FileCompressor2"},
    {id: 6, title: "Sklep", html_url: "https://github.com/Kosciarz/Sklep"}
  ];

  return (
    <div className="projects">
      <h3>My Recent <span className="works">Works</span></h3>
      <p>Here are a few project I've worked on recently.</p>
      <ul className="projects-list">
        {projects.map(p => {
          return (
            <li key={p.id} className="projects-list__item">
              <p className="projects-list__item__title">{p.title}</p>
              <a href={p.html_url} className="projects-list__item__html-url">
                <FaGithub size={16} />
                GitHub
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectsList

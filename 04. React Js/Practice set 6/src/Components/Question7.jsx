import { useEffect, useState } from "react"

export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/projects') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            projects: [
              {
                title: 'E-commerce Website',
                description:
                  'A fully functional e-commerce website with shopping cart and checkout functionality.',
                technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                completed: false,
              },
              {
                title: 'Weather App',
                description:
                  'A web application that displays the current weather and forecast for a given location.',
                technologies: ['React', 'Node.js', 'OpenWeatherMap API'],
                completed: true,
              },
              {
                title: 'Task Manager',
                description:
                  'A web application that allows users to create, manage and track tasks.',
                technologies: ['Vue.js', 'Firebase'],
                completed: false,
              },
              {
                title: 'Blog Website',
                description:
                  'A blog website that allows users to create, read, update and delete blog posts.',
                technologies: ['React JS', 'MongoDB'],
                completed: true,
              },
              {
                title: 'Mobile Game',
                description:
                  'A mobile game developed for iOS and Android platforms.',
                technologies: ['Unity', 'C#'],
                completed: false,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Projects not found.',
        })
      }
    }, 2000)
  })
}

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading,setLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const [selected, setSelected] = useState("");
  const fetchProject = async(url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setLoading(false);
      setProjects(result.data.projects);
    } catch (error) {
      setLoading(false);
      setProjects(error.message);
    }
  }
  useEffect(() => {
    fetchProject("https://example.com/api/projects");
  },[])
  const clickHandler = (projectTitle) => {
    setSelected(projectTitle);
    selected === projectTitle ? setDisplay(prev => !prev) : setDisplay(true);
  }
  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    {
      !loading ? projects.length !== 0 && typeof projects !== "string" ? projects.map((project,index) => <div className="text-left mt-2" key={index}>
        <div><span className="font-semibold">Name: </span>{project.title}</div>
        <div><span className="font-semibold">Description: </span>{project.description}</div>
        {
          display && selected === project.title ? <div>
            <div><span className="font-semibold">Technology: </span>{project.technologies.toString()}</div>
            <div><span className="font-semibold">Completed: </span>{project.completed}</div>
          </div> : ""
        }
        <button onClick={() => clickHandler(project.title)} className="text-white p-1 text-l">{display ? "Hide Details" : "Show Details"}</button>
      </div>) : <div>{projects}</div> : <div>Loading ...</div>
    }
  </div>
}
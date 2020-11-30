import React, {useState, useEffect} from 'react';
import "./App.css"
import Header from './Components/Header';
import api from "./Services/api"
function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get("projects").then(res => {
      setProjects(res.data)
    })
  }, [])

 function handleAddProject() {
   api.post("projects", {
     title:`Novo Projeto ${Date.now()}`,
     owner:"Kayk Mascarenhas"
   }).then(res => {
    const project = res.data
    setProjects([...projects, project])
   })

   
 }

  return (
  <>
    <Header title="Projects"/>
    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li> )}
    </ul>
    <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
  </>)
}

export default App
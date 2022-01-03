import React from "react";
import { Container, Button } from "react-bootstrap";
import ProjectTable from "./ProjectTable";
import CreateProject from "./CreateProject.js";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: [],
      showModal : false
    };
  }

  getProjects = async () => {
    const results = await fetch("http://localhost:3000/projects");
    const jsonResults = await results.json();
    this.setState({
      projectsData: jsonResults,
    });
  };

  async componentDidMount() {
    await this.getProjects();
  }

  handleModal = () => {
    this.setState({
      showModal : !this.state.showModal
    })
  }

  render() {
    return (
      <React.Fragment>
      <ProjectTable projectsData ={this.state.projectsData}
      getProjects = {this.getProjects} />
      <Container>
      <Button  variant="primary" onClick = {this.handleModal}>Create Project</Button>
      </Container>
      <CreateProject 
      showModal = {this.state.showModal } 
      handleModal = {this.handleModal}
      getProjects = {this.getProjects} />
      </React.Fragment>
    );
  }
}

export default Projects;

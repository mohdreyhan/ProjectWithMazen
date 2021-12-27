import React from "react";
import ProjectTable from "./ProjectTable";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: [],
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

  render() {
    return (
      <React.Fragment>
      <ProjectTable projectsData ={this.state.projectsData} />
      </React.Fragment>
    );
  }
}

export default Projects;

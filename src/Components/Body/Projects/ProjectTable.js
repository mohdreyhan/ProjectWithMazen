import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import UpdateProject from "./UpdateProject.js";

class ProjectTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal : false,
      recordToUpdate : ''
    };
  }

  handleModal = (id) => {
    this.setState({
      showModal : !this.state.showModal,
      recordToUpdate:id
    })
  }

  render() {
    const projectsData = this.props.projectsData;
    const getProjects = this.props.getProjects
    return (
      <React.Fragment>
        <Container>
          <Table striped bordered hover>
            <TableHeader />
            <TableBody projectsData={projectsData}
            handleModal = {this.handleModal} />
          </Table>
          <UpdateProject showModal = {this.state.showModal}
          handleModal = {this.handleModal}
          getProjects = {getProjects} 
          recordToUpdate = {this.state.recordToUpdate} />
        </Container>
      </React.Fragment>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>SNO</th>
        <th>Project Name</th>
        <th>Task Count</th>
        <th>Update</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const results = props.projectsData.map((value, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{value.name}</td>
        <td>{value.taskCount}</td>
        <td><Button variant="primary" onClick = {()=>props.handleModal(value.id)}>Update</Button></td>
        <td><Button variant="danger">Delete</Button></td>
      </tr>
    );
  });
  return <tbody>{results}</tbody>;
};

export default ProjectTable;

import React from "react";
import { Container, Table } from "react-bootstrap";

class ProjectTable extends React.Component {
  render() {
    const projectsData = this.props.projectsData;
    console.log(projectsData)
    return (
      <React.Fragment>
        <Container>
          <Table striped bordered hover>
              <TableHeader />
              <TableBody />
          </Table>
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
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  );
};

export default ProjectTable;

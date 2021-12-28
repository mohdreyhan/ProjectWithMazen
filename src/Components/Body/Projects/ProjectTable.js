import React from "react";
import { Container, Table } from "react-bootstrap";

class ProjectTable extends React.Component {
  render() {
    const projectsData = this.props.projectsData;
    return (
      <React.Fragment>
        <Container>
          <Table striped bordered hover>
            <TableHeader />
            <TableBody projectsData={projectsData} />
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
        <th>Project Name</th>
        <th>Task Count</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  console.log("table body", props.projectsData);
  const results = props.projectsData.map((value, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{value.name}</td>
        <td>{value.taskCount}</td>
      </tr>
    );
  });
  return <tbody>{results}</tbody>;
};

export default ProjectTable;

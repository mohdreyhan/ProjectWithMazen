import React from "react";
import { Container, Table } from "react-bootstrap";

class EmployeeTable extends React.Component {
  render() {
    const employeeData = this.props.employeeData;
    return (
      <React.Fragment>
        <Container>
          <Table striped bordered hover>
            <TableHeader />
            <TableBody employeeData={employeeData} />
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
        <th>Employee Name</th>
        <th>Task Count</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const results = props.employeeData.map((value, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{value.name}</td>
        <td>{value.taskCount}</td>
        <td>{value.status}</td>
      </tr>
    );
  });
  return <tbody>{results}</tbody>;
};

export default EmployeeTable;

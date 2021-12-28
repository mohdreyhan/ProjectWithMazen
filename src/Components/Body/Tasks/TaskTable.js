import React from "react";
import { Container, Table } from "react-bootstrap";

class TaskTable extends React.Component {
  render() {
    const taskData = this.props.taskData;
    return (
      <React.Fragment>
        <Container>
          <Table striped bordered hover>
            <TableHeader />
            <TableBody taskData={taskData} />
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
        <th>Task Name</th>
        <th>Assigned To</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const results = props.taskData.map((value, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{value.name}</td>
        <td>{value.assignedTo}</td>
        <td>{value.status}</td>
      </tr>
    );
  });
  return <tbody>{results}</tbody>;
};

export default TaskTable;

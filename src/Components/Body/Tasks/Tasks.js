import React from "react";
import TaskTable from "./TaskTable";
class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskData : []
    };
  }

  getTasks = async () => {
    const results = await fetch("http://localhost:3000/tasks");
    const jsonResults = await results.json();
    this.setState({
      taskData : jsonResults
    })
  }

  async componentDidMount() {
    await this.getTasks();
  }

  render() {
    return (
      <React.Fragment>
        <TaskTable taskData = {this.state.taskData} />
      </React.Fragment>
    );
  }
}

export default Tasks;

import React from "react";
import EmployeeTable from "./EmployeeTable.js";
class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: [],
    };
  }

  getEmployees = async () => {
    const results = await fetch("http://localhost:3000/employees");
    const jsonResults = await results.json();
    this.setState({
      employeeData: jsonResults,
    });
  };

  async componentDidMount() {
    await this.getEmployees();
  }

  render() {
    return (
      <React.Fragment>
        <EmployeeTable employeeData = {this.state.employeeData} />
      </React.Fragment>
    );
  }
}

export default Employees;

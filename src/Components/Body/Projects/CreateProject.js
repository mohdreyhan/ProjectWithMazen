import React from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData : []
    };
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      formData : {...this.state.formData, [name] : value}
    })
  } 

  handleSubmit = async (event,getProjects) => {
    event.preventDefault();
    const results = await fetch("http://localhost:3000/projects" , {
      method : "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state.formData)
    });
    if(results.status == 201) {
      getProjects();
    }
  }

  render() {
    const showModal = this.props.showModal;
    const handleModal = this.props.handleModal;
    const getProjects = this.props.getProjects
    return (
      <React.Fragment>
        <Container>
          <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Form  onSubmit  = {(event)=>this.handleSubmit(event,getProjects)}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Project Name"
                    onChange ={this.handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Task Count</Form.Label>
                  <Form.Control
                    type= "number"
                    name="taskCount"
                    placeholder="Enter Task count"
                    onChange ={this.handleChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </React.Fragment>
    );
  }
}

export default CreateProject;

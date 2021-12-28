import React from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const showModal = this.props.showModal
      const handleModal = this.props.handleModal
    return (
      <React.Fragment>
        <Container>
          <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Create Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Project Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Task Count</Form.Label>
                  <Form.Control type="text" placeholder="Enter Task count" />
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
              <Button variant="primary" onClick={handleModal}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </React.Fragment>
    );
  }
}

export default CreateProject;

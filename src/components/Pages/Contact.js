import { React} from "react";
import { Form , Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
export const Contact = () => {

  return (
    <div style={{paddingLeft: 200, paddingRight: 200}}>
     <Form>
      <Form.Group style={{fontSize:40}} className="mb-3" controlId="formBasicEmail">
        <Form.Label size="lg" lg={5}>Email address</Form.Label>
        <Form.Control size="lg" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formFeedBack">
        <Form.Label style={{fontSize:40}}>Password</Form.Label>
        <Form.Control size="lg" placeholder="Password" type="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

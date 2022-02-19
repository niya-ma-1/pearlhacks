import { React} from "react";
import { Form , Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../Styles.css';

export const Contact = () => {

  return (
    <div className="form">
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontSize:40}} size="lg" >Email address</Form.Label>
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

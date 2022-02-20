import { React} from "react";
import { Form , Row, Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useState} from "react"; 
import {
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut,} from "firebase/auth";
import {auth} from './firebase_config';
import '../Styles.css';
import Nessie from './Nessie';

function Contact() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const[user, setUser] = useState({});
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
  const register = async() => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth, 
        registerEmail,
        registerPassword
      );
      console.log(user)
      
    } catch (error) {
      console.log(error.message);
    }
    
  };
  const login = async() => {
    try {
      const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail,
        loginPassword
      );
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async() => {
    await signOut(auth);
  };
  return (
    <div className='body'>
      <div>
          <h4>User Logged In As:</h4>
          <p>{user?.email}</p>
          <Button variant="primary" type="submit" onClick={logout}>
            Sign out
          </Button>  
          {/* <button onClick={logout}> Sign out </button>  */}
        </div>
    <div className={'splitScreen'}>
        <div className={'topPane'} style={{padding:50}}>
          <h3 style={{fontSize:40}}>
            Register
          </h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange = {(event) => {
                setRegisterEmail(event.target.value);
                }}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFeedBack">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" type="password" onChange = {(event) => {
              setRegisterPassword(event.target.value);
              }}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={register, Nessie(user?.email)} >
              Register
            </Button>
          </Form>
          
          {/* <input placeholder = "Email ..." 
            onChange = {(event) => {
              setRegisterEmail(event.target.value);
              }}/> */}
          {/* <input placeholder = "Password ..."
            onChange = {(event) => {
              setRegisterPassword(event.target.value);
              }}/>
          <button onClick={register}> Create User</button> */}
        </div>
        <div className={'bottomPane'} style={{padding:50}}>
          <h3 style={{fontSize:40}}> Login </h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange = {(event) => {
                setLoginEmail(event.target.value);
                }}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFeedBack">
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="Password" type="password" onChange = {(event) => {
              setLoginPassword(event.target.value);
              }}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={login}>
              Login
            </Button>
          </Form>
          {/* <input placeholder = "Email ..."
            onChange = {(event) => {
              setLoginEmail(event.target.value);
              }}/>
          <input placeholder = "Password ..."
            onChange = {(event) => {
              setLoginPassword(event.target.value);
              }}/>*/}
         
        </div>
    </div>
    </div>
  );
}

export default Contact;

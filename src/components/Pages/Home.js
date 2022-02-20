import React from "react";
import Button from 'react-bootstrap/Button';
import '../Styles.css';
import axios from 'axios';
import { SuperAgent } from "superagent";
import bg from '../assets/bg.gif';

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

export const Home = () => {
  
  return (
    <div
    style={{
      backgroundImage: "url(" + bg + ")",
      backgroundSize: "cover",
      height: "100vh",
    }}>
    <div className="Title1" style={{paddingTop: 40}} >
      <p>B-LOT</p>
    </div>
    <div className="Title2">
      <p>Lottery made easy and transparent</p>
      
    </div>
    
    </div>
  );
};

import React from "react";
import {Table, tr, td, thead, InputGroup, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles.css';

export const List = () => {
  return (
    <div style={{padding:20,}}>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Draw Date</th>
        <th>Lottery Name</th>
        <th>Status</th>
        <th>Tracking</th>
        <th>Buy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2/22/2022</td>
        <td>Student Survey Lottery</td>
        <td style={{color:'red'}}>Ended</td>
        <td><a href="hyperlink"> track </a></td>
        <td><div>$
          <input type="email" />
          <button>
            Confirm
          </button>
          </div></td>
      </tr>
      <tr>
        <td>2/26/2022</td>
        <td>Trivia Lottery</td>
        <td style={{color:'orange'}}>Closed</td>
        <td><a href="hyperlink"> track </a></td>
        <td><div>$
          <input type="email" />
          <button>
            Confirm
          </button>
          </div></td>
      </tr>
      <tr>
        <td>2/28/2022</td>
        <td>Concert Ticket Lottery</td>
        <td style={{color:'green'}}>Open</td>
        <td><a href="hyperlink"> track </a></td>
        <td><div>$
          <input type="email" />
          <button>
            Confirm
          </button>
          </div>
        </td>
      </tr>
      <tr>
        <td>2/28/2022</td>
        <td>Some Random Event</td>
        <td style={{color:'green'}}>Open</td>
        <td><a href="hyperlink"> track </a></td>
        <td>
          <div>$
          <input type="email" />
          <button>
            Confirm
          </button>
          </div>
        </td>
      </tr>
    </tbody>
    </Table>
    </div>
  );
};

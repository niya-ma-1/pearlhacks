import { React} from "react";
import {useState} from "react"; 



function Nessie(name){
  const Url = 'http://api.nessieisreal.com/customers?key=d87ea14b5e1daec5c76b1c411d9e1119';

  var request = require('superagent');
  var user  = {
    "first_name": name,
    "last_name": "qq",
    "address": {
      "street_number": "101",
      "street_name": "Pearl",
      "city": "Hacks",
      "state": "PH",
      "zip": "10001"}};

  request.post(Url, user).end(function(response){
    
  // if ("code" == 400){
  //   console.log('nope')
  // }
  
  });
}
export default Nessie;

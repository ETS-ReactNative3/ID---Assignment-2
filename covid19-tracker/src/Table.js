import React from "react";
import "./Table.css";       //used for styling the table
import numeral from "numeral"; //used to style the figures of country

function Table( { countries } ) {
  return (
    <div className="table">
      {/*this goes throughs all the countries and map through them, and for every country you return the following,
      so essentially a table row which contains 2 table data inside of it. So this is meant for whenever this function is called.*/}  
      {countries.map(({country, cases}) => (       //here you directly destructure the passed in obj and accesses its fields respectively to be used //basically for every country you get the country and cases
          <tr>
              <td>{country}</td> {/*here you access its respective country name*/}
              <td><strong>{numeral(cases).format("0,0")}</strong></td>
          </tr>            //the numeral format them to have commas and make it more readable       
      ))} 
      {/*since the response of each country contains main keys(info), we will put it into the table data. And retrive it from the countries that is passed in through the parameter*/}
    </div>
  );
}//this func will be called repeatedly through a loop, creating a table for us

export default Table;


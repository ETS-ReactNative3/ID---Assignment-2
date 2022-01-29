import React, { useState } from 'react';        //we added useState so to be able to use state(var) in react later
import {
  MenuItem,
  FormControl,
  Select,  
} from "@material-ui/core"                      //importing the material UI 
import './App.css';

function App() {
  const [countires, setCountries] = useState([
    'USA', 'UK', 'INDIA'
  ]);  
  //we passed in a default value in the state(var), an empty array
  // hence we must first create a state(variable in react) of all countires for it to loop through

  //{} Note these curely brackets is used to write JS inside of React, combining HTML with JS
  return (
    <div className="app">                     {/*use of BAM naming convention*/}
    <div className="app__header">           {/*here we create a div and make the drop down into a row instead, using flex box so it does not span a whole row*/}
    <h1> Covid-19 Analytics</h1>
      <FormControl className ="app_dropdown"> {/*used for the dropdown list of countries later*/}
        <Select variant = "outlined" value="abc">        {/*material UI provieds us with select component, the attribute variant provides outline to the dropdown, value will be what's is displayed by default hence if the tag shared the same value it will be displayed by default, in this case "WorldWide" is set to default in the drop down list*/}
          {/* in the select menu i want to loop through all possible countries to display in the drop down list, using state(variable)*/}
          
          { //this will loop through the state(var), so for every country in countires(state(var)), we will retrun a MenuItem to be included in the drop down list, and in each iteration set it to the value attr of the specific element and the name of the specific element. 
            countires.map(country => (
              <MenuItem value={country}>{country}</MenuItem>
            ))
          }

          <MenuItem value="Worldwide">Worldwide</MenuItem>
          <MenuItem value="abc">2</MenuItem>
          <MenuItem value="bc">3</MenuItem>
          <MenuItem value="c">4</MenuItem>
        </Select>
      </FormControl>
    </div>
    </div>
  );
}

export default App;

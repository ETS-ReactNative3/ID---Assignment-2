import React, { useEffect, useState } from "react";            //we added useState so to be able to use state(var) in react later
import { MenuItem,  FormControl,  Select} from "@material-ui/core";                         //importing the material UI 
import "./App.css";





function App() {
  const [countries, setCountries] = useState([]); 
  const [country, setCountry] = useState('worldwide'); //this will be used as the deafult value 
  //we passed in a default value in the state(var), an empty array
  // hence we must first create a state(variable in react) of all countries for it to loop through



  //hence here we make an API call to pull each countries and their respective info with regards to covid-19, through this URL: https://disease.sh/v3/covid-19/countries
  //USEEFFECT is used to run a piece of code based on a given con't, by taking an empty func, and allowing a cont in the []. Meaning the code in the empty func will run once when it loads and not again after
  //Meaing it will run like once when the app component loads and as well as when the cont [] changes. In this case, [country] when country variable changes
  //We need a async func to send a request and wait for it to come back 
  useEffect(() => {

    //an async function 
    const getCountriesData = async() => {
      await fetch("https://disease.sh/v3/covid-19/countries")       //aft the response is fetched, we want to then only retrive the JSON from it
      .then((response) => response.json())                          //thereafter, we use the Data(JSON) and restructure it
      .then((data) => {
        const countries = data.map((country) => ({                  //mapping of countries obj, map func essentially loops through the array, it gets some data(in this case) and returning an ARRAY of obj with only obj with specificed attr and not the whole JSON raw obj  
          name: country.country,                                    //here we are matching the data(name = Singapore) we retrived and mapping it into an object
          value: country.countryInfo.iso2,                          //similarly here we are mapping the country code(SG, JPN...) to the value attr in the obj
        }));                                                       //note that you are retriving from the JSON and traversing through the data to retrive the value before assigning ti to the value of an obj
        //here we are iterating through the data, and then getting every country and only return specific obj from the data
        
        //now we are going to set the state(var) created earlier, by changing the country variable in state(var), through passing in the country obj we mapped 
        setCountries(countries)
      });
    };

    getCountriesData(); //calling the func
  }, []); //everytime a var inside of [] changes meaing, when the user select a country or smth, it will re-run this code and then get the Data and match it to the condition specified, which is a country
  //therefore, we made an API request and pulled it in before populating it in the SELECT list 


// a async func that is called when the select value changes, to listen to and display the respective event
//the async is used for... 
const onCountryChange = async (event) => {
  const countryCode = event.target.value //this will grab the selected value that the user chose in the select menu

  setCountry(countryCode)                //here you hence changed the default value, setting it to the one the user choosen in the select list
  console.log("Country chosen: ", countryCode) //in addition to re-setting the default value, to displaying the selected choice we want it call another func to pull more info, by making an API request to pull ALL OF that countries info and store it as an obj
}
//a change usually passes an event along side an event, hence in every event we want to retrive the respective country code 



  //{} Note these curely brackets is used to write JS inside of React, combining HTML with JS
  return (
    <div className="app">                     {/*use of BAM naming convention*/}
      <div className="app__header">           {/*here we create a div and make the drop down into a row instead, using flex box so it does not span a whole row, hence we create a division for the header*/}
        <h1> Covid-19 Analytics</h1>
        <FormControl className ="app_dropdown"> {/*used for the dropdown list of countries later*/}
          <Select variant = "outlined" value={country} onChange={onCountryChange}>        {/*material UI provieds us with select component, the attribute variant provides outline to the dropdown, value will be what's is displayed by default hence if the tag shared the same value it will be displayed by default, in this case "WorldWide" is set to default in the drop down list. !!! We have also mapped our droppdown to the respective country!!!*/}
            {/* in the select menu i want to loop through all possible countries to display in the drop down list, using state(variable)*/}{/*in addition i also use the arguemnt onChange, to listen to an event that changes the select to another country, so on the select default value being change it will call the function onCountrychange to perform some action */}

            <MenuItem value="worldwide">Worldwide</MenuItem> {/*here i want to set the default value to wolrd wide, to have world wide as the defualt opt*/} 

            {/*this will loop through the state(var), so for every country in countries(state(var)), we will retrun a MenuItem to be included in the drop down list, and in each iteration set it to the value attr of the specific element and the name of the specific element.*/ }
            {/*Hence we then use an API call to be able to iterate through all the countries and display each of it, so we will make a call to get all countries with covid-19 */}
            { 
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            } {/*essentially it maps through all countries and display the respective name and value, by retriving it from the obj's attri*/}
          </Select>
        </FormControl>
      </div>

      <div class="app_stats"> {/*here we create info boxes to store statistics regarding the covid cases based on the selected country*/}

      </div>
    </div>
  );
}

export default App;

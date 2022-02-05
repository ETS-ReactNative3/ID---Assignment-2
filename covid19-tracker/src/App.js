import React, { useEffect, useState } from "react";            //we added useState so to be able to use state(var) in react later
import { MenuItem,  FormControl,  Select, Card, CardContent} from "@material-ui/core";                         //importing the material UI 
import InfoBox from "./InfoBox";                                                            //here it imports the info boxes.js using relative path
import Map from "./Map";                                                                    //here it imports the map.js using relative path
import Table from "./Table"
import { sortData } from "./util";                                                          //to use the sort function inside of the utilisties file
import LineGraph from "./LineGraph";
import "./App.css";
import "leaflet/dist/leaflet.css";






function App() {
  const [countries, setCountries] = useState([]); 
  const [country, setCountry] = useState('worldwide'); //this will be used as the deafult value 
  //we passed in a default value in the state(var), an empty array
  // hence we must first create a state(variable in react) of all countries for it to loop through

  const [countryInfo, setCountryInfo] = useState({}); //this state(with default value(empty obj)) is used to store the info of the obj based on the user's selected countryCode

  const [tableData, setTableData] = useState([]); //this a state with default value(empty array), to collect info to be used in the the table as data

  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);


  /* !!!This is used to display the info for the default worldwide opt, through accessing its data and its respective attribute(fields), and setting it into the state(var) coutryInfo!!! */
  //UseEffect [], is only going to work once app.js loads.
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all").then(response => response.json())
    .then(data => { 
      setCountryInfo(data); //thsi fetches everything for world wide, then we set the response to json as that is the form we want it, before we set countryinfo to the data provided
    })
  }, [])

  /* !!!GETS country name and code for selection !!! */
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
        
        //here before we set the countries we want to sort the data of the countries by cases, by passing data as parameter
        const sortedData = sortData(data);

        //set all the data(info which contains name of the country and its country code) from the URL into the state(var(tableData)) array
        setTableData(sortedData); //list of countries(unsorted) which comes back from that response and simply chucking it into the tableData array to store all countries.
        //hence it uses the sorted version of data and will hence display it in sorted format

        //now we are going to set the state(var) created earlier, by changing the country variable in state(var), through passing in the country obj we mapped 
        setCountries(countries);


      });
    };
    getCountriesData(); //calling the func
  }, []); //everytime a var inside of [] changes meaing, when the user select a country or smth, it will re-run this code and then get the Data and match it to the condition specified, which is a country
  //therefore, we made an API request and pulled it in before populating it in the SELECT list 

  
  /* !!!GETS country code, finds respective country obj and display info !!! */
  // a async func that is called when the select value changes, to listen to and display the respective event
  //the async is used for the requesting of data from the backend and see if it works
  //this func is important in listen for change of event in the selection in the drop down field, hence onced changed it triggers this func we want it to call another func to perform API pull request, using the info of the respective country. But for the default we will need to pull info of all conutries using a diff specific URL.
  const onCountryChange = async (event) => {
    const countryCode = event.target.value; //this will grab the selected value that the user chose in the select menu

    //setCountry(countryCode);               //here you hence changed the default value, setting it to the one the user choosen in the select list
    console.log("Country chosen: ", countryCode); //in addition to re-setting the default value, to displaying the selected choice we want it call another func to pull more info, by making an API request to pull ALL OF that countries info and store it as an obj

    //https://disease.sh/v3/covid-19/all                      (used to pull all info when default value of worldwide, duriing default when it is selected)
    //https://disease.sh/v3/covid-19/countries[Country Code]  (used to pull the specified country, using the passed in country code user selectes it, to pull the respective info)
    //if country code = world wide, use first, else use second with passed in country code

    const url = 
      countryCode === "worldwide" 
        ? "https://disease.sh/v3/covid-19/all"                                               //if country code is ww it will go with this URL
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;                          //else this URL is used
    
    await fetch(url).then(response => response.json()).then(data => {
      setCountry(countryCode);
      setCountryInfo(data);  //stores the whole country data into the state(variable) using the setters, from the response. But not for worldwide.
    });
    //hence once we fetch and got the response we want to turn it into json data obj, before allowing us to access its respective attri 

    //this is an if statement to check if the country code equates to 'worldwide, it sets the const url to the worldwide one, 
    //other wise it will set it to the opposite one, with the help of `` to pass in the value of the countrycode selected by the user
  };
  //a change usually passes an event along side an event, hence in every event we want to retrive the respective country code 
  console.log("Country info: ", countryInfo)//this is to see whats the response from API


  /* !!!DISPLAY INFO!!! */
  //{} Note these curely brackets is used to write JS inside of React, combining HTML with JS
  return (
    <div className="app">                     {/*use of BAM naming convention*/}
      <div className="app__left">
        {/*Title + Drop Down field*/}
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
              } 
              {/*essentially it maps through all countries and display the respective name and value, by retriving it from the obj's attri*/}
            </Select>
          </FormControl>
        </div>

        {/*InfoBoxes*/}
        <div className="app__stats"> {/*here we create info boxes to store statistics regarding the covid cases based on the selected country*/}
          <InfoBox title="Coronavirus Case" cases={countryInfo.todayCases} total={countryInfo.cases}/>  {/*Since the info box(from material UI) takes in a few components we must make this match that of the parameters from external js we imported, based on what we set*/}
      
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
       
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
        </div>

        {/*Map*/}
        <Map 
        center={mapCenter}
        zoom={mapZoom}
        />
      </div>

      <Card className="app__right__panel">
        {/*Table + Graph (right panel)*/}
        <CardContent>
          {/*Table*/}
          {/*Since the useEffect previously already obtain the info of the obj, we can then use it to set the table data based on countries with the highest covid cases*/}
          <h3>Total Live Cases of Country(by cases)</h3>
          <Table countries={tableData}/>
          
          
          {/*Graph*/}
          <h3>Worldwide new cases</h3>
          {/*<LineGraph />*/}
          
        </CardContent>

      </Card> {/*Card/CardContent is imported from Material UI*/}
    </div>
  );
}

export default App;

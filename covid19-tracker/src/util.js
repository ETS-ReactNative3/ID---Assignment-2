import React from "react";         //here we use some JSX
import numeral from "numeral";   //here we use some JSX (this will be used to format numbers in a certain manner)
import { Circle, Popup } from "react-leaflet"; //circle is to display the circles, then popup is for the interactive tool tip

//utilities allows us to add in small little handy functions to be called and used


const casesTypeColors = {
    cases: {
      hex: "#CC1034", //this will represent the hexidecimal color
      //rgb: "rgb(204, 16, 52)", //this will represent the RGB color
      //half_op: "rgba(204, 16, 52, 0.5)", //this will represent the opactiy of the border
      multiplier: 120, //this will represent the size of the circle //the inital multiplier was 800 but the cricle was to big(due to incresing cases) making the circles overlap hence i changed it to 120
    },
    recovered: {
      hex: "#7dd71d",
      //rgb: "rgb(125, 215, 29)",
      //half_op: "rgba(125, 215, 29, 0.5)",
      multiplier: 100,
    },
    deaths: {
      hex: "#c70053",
      //rgb: "rgb(251, 68, 67)",
      //half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 500,
    },
  };
  //this is a CSSS used to style the circles based on different colors such as recoved, deaths and total





/*this file is used for utilities*/
/*basically one func inclueded in this file is sorting*/

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (a.cases > b.cases){
            return -1
        }
        else{
            return 1
        }
         

    })
    return sortedData;

    /*retrun sortedData.sort((a, b) => (a.cases > b.cases ? -1: 1));
      ^^^performs the same thing  */
} 
/*essentially a func that take some data and copy out the parameter that we passed in into an array,
assigning it to a const before sorting it, using a ES6 func sort(), which sorts two compenents,
hence using that it will go through an sort out all of 'a'(-1) before returing the sorted data array woth countries sorted */


//this will be called to format the number inside of info boxes using numeral making it appealing to look at, as it formats the numbers with plus sign
export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";


//The purpose of this function is to DRAW circles on the map with a interactive tooltop (meaning when you click the circles it will display respective info about it) 
export const showDataOnMap = (data, casesType) => //there no need for {}
    data.map((country) => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]} //note it is accessed by the country obj, hence you cannot call it by data.countryInfo. ..., instead you must use the obj name, country.countryInfo.... to access the attributes
            color={casesTypeColors[casesType].hex} //fills the borders of the circle //fillColor, fills the inner part of the circle
            fillColor={casesTypeColors[casesType].hex} //color & fillcolor attributes, utilies the styliing dicitonary on top accesses the casesType("Deaths, recovered...") and get the respective color  
            fillOpacity={0.4} //this makes the circle slightly transparent
            radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }//radius attribute, utilies the styliing dicitonary on top accesses the casesType("Deaths, recovered...") and get the respective size
            //this formula takes the cases and mutiplies it to the respective size of circle using the multiplier in the styling dict
        >
            <Popup>
                {/*<h1>Im a popup</h1>*/}
                <div className="info-container">
                    <div
                        className="info-flag"
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }} 
                    /> 
                    {/*here we are going to render the flag from the URL*/} 
                    {/*we made it self enclosing, because onlt arrguments is required and content is not needed */}
                    
                    <div className="info-name">
                        {country.country /*this displays the name of the country*/}
                    </div>
                    
                    <div className="info-confirmed">
                        Cases: {numeral(country.cases).format("0,0")} 
                    </div> {/*here we display the number of cases using numeral(moduler) to format the number, we format it the same form for recoved and death taking the data out of the obj's respective attribute*/}

                    <div className="info-recovered">
                        Recovered: {numeral(country.recovered).format("0,0")}
                    </div>

                    <div className="info-deaths">
                        Deaths: {numeral(country.deaths).format("0,0")}
                    </div>{/*notice how we can write using JSX here, it makes it way easier and simpler to write these things provided by React JSX*/}
                </div>
            </Popup>
        </Circle>//here it will use the circle imported from leaflet and display it, it takes in a few attributes too
    )); //for every iteration, (we make each obj a country), we are then going to return info about the country


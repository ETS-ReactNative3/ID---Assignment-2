import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2"; //this provids us with the line component from it
import numeral from "numeral";

//Here we have a func to draft out the options
//we will then pass this entire obj(config), as an argument to the <Line/> element
const options = {
  legend: {
    display : false,  //we have a legend but not displaying it 
  },
  elements: {
    point: {
      radius : 0, //point radius set to 0
    },
  },
  maintainAspectRatio: false,
  tooltips: { //we neeed to install numeral to use tool tips so that when we hover over the graph we get to see what value is at the specific point
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0"); //here we install numeral to use it, helps to format our numbers in a given way
      },
    },
  },
  scales: { //scales has xy axis 
    xAxes: [
      {
        type: "time", //we set x axis to type time 
        time: {
          format: "MM/DD/YY", //this is the format we want it in 
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false, //we dont show the yaxis grid line here
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a"); //show the ticks in this format, this is a given timestamp
          },
        },
      },
    ],
  },
};

//HERE we have a func to modify the data to suit our purpose
//a function                             //if nothing is passed in, in the case type it will default to only reading cases
const buildChartData = (data, casesType="cases") => { //cases type allows us to access all the different cases type of the obj in this case, cases/deaths/recovered
  let chartData = []; //empty array
  let lastDataPoint;    //an empty obj
    
  //we then loop through all data cases, and if it is the last data point we create a obj containing the repsecitve xy
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint ={
        x: date,
        y: data[casesType][date] - lastDataPoint, //this gets the diff between two dates allowing us to then show the fluctuation through the 120days
      };
      chartData.push(newDataPoint); //this pushes the data into the array
    }
    lastDataPoint = data[casesType][date]; //thereafter we set the last Data point to the specific cases obj 
  }
  return chartData; //before returning the final chartdata as an array storing xy's
};

function LineGraph() {
  const[data, setData] = useState({}); //here we include a state to store the data object it fetches 

  //util func to detemine how to format it into Chart.js(the line graph)
  //it takes in data and transforms it 
  //here we have a fetch that must be performed async-ly, so to run async code inside of useEffect we need a async func like fetchData
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, "cases");
          setData(chartData)
        });
        //this gets the response in JSON, we then use the JSON data and get specific fields(attr) of the data obj
        //essentially inside we will need a utility func to take the info and put it in the format the Chart.js(a list with an obj of x n y) requests for
        //hence we by using the util func we fill it with date and cases from the data retrived as x and y axis for it to then be plotted
    };

    fetchData(); //we then fetch the data here
  }, []); //this is so our compnent knows to execute this after rendering

  

  return (
    <div>
      <h1>Im a Graph</h1>
      {data?.length > 0 && (  //protect against that in the scenario that data has no data it does not run
        <Line
          options = {options}
          data={{              //this data will be fetch by itself using useEffect
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
          
        /> 
      )}
    </div>
  );
}//data argument takes an obj, while datasets take an array

export default LineGraph;
/*in this func we have installed a dependcy called reactchart js2, it then fetches the data from
this specific URL: https://disease.sh/v3/covid-19/historical/all?lastdays=120, on its own before displaying 
the information based on the arguments and aft being called in the app.js */
import React, { useEffect, useState} from 'react';
import { Line } from "react-chartjs-2"; //this provids us with the line component from it


function LineGraph() {

  const[data, setData] = useState({}) //here we include a state to store the data object it fetches 

  //a function                             //if nothing is passed in, in the case type it will default to only reading cases
  const buildChartData = (data, casesType= 'cases') => { //cases type allows us to access all the different cases type of the obj in this case, cases/deaths/recovered
    const chartData = []; //empty array
    let lastDataPoint;    //an empty obj
    
    //we then loop through all data cases, and if it is the last data point we create a obj containing the repsecitve xy
    for (let date in data.cases) {
        if (lastDataPoint){
            const newDataPoint ={
                x: date,
                y: data[casesType][date] - lastDataPoint //this gets the diff between two dates allowing us to then show the fluctuation through the 120days
            };
            chartData.push(newDataPoint); //this pushes the data into the array
        }
        lastDataPoint = data[casesType][date]; //thereafter we set the last Data point to the specific cases obj 
    };
    return chartData //before returning the final chartdata as an array storing xy's
  }

  //util func to detemine how to format it into Chart.js(the line graph)
  //it takes in data and transforms it 

  useEffect(()=> {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
    .then((response) => response.json())
    .then((data) => {
        const chartData = buildChartData(data)
        setData(chartData)
    })
    //this gets the response in JSON, we then use the JSON data and get specific fields(attr) of the data obj
    //essentially inside we will need a utility func to take the info and put it in the format the Chart.js(a list with an obj of x n y) requests for
    //hence we by using the util func we fill it with date and cases from the data retrived as x and y axis for it to then be plotted
  }, []) //this is so our compnent knows to execute this after rendering


  return(
    <div>
        <Line 

        data={{
            datasets: [
                {
                  backgroundColor: "rgba(204, 16, 52, 0.5)",
                  borderColor: "#CC1034",
                  data: data,
                },
            ],
        }}
        

        
        /> 
    </div>
  )
}//data argument takes an obj, while datasets take an array

export default LineGraph;
/*in this func we have installed a dependcy called reactchart js2, it then fetches the data from
this specific URL: https://disease.sh/v3/covid-19/historical/all?lastdays=120, on its own before displaying 
the information based on the arguments and aft being called in the app.js */
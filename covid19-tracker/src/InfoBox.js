import React from "react";
import { Card,  CardContent, Typography} from "@material-ui/core"; 
//there have been pulled from Material UI and will be used later, card content is used as background
import "./InfoBox.css"; //this provides styling to the info boxes 

function InfoBox({ title, cases, total, active, isRed, ...props}) {  //this will be the three things requried to be passed in when creating an infobox
  return (
  <Card 
    onClick={props.onClick} 
    className={
      `infoBox 
      ${active && "infoBox--selected"} 
      ${isRed && "infoBox--red"}`
    } 
  > 
  {/*notice how we use spread(..props) to store onClick, hence when the spread is passed in, the attri onClick(in side of card) gives it a clickable functionality */}{/* here we make use of MaterialUI card element, hence the InfoBox is made up of card*/}
  {/*the classname attri allows for string interpolation, to check that if its active & check if at the specific class if its active (note: underscore __(element change)  is not used because we are using BAM naming convention, use of DASH --(modification of element) is to represent that we are modifiying the element, while underscore means that it is an element)  */}
  {/*the className attri also checks if the parameter value that has been passed in contains the value isRed, which will then allow for certain modification of an element*/}

    <CardContent>
        {/*title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}                      {/* here we use the title which was passed in*/}
        </Typography>
        
        {/*cases (increasing cases) */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2> {/*the argument will check if it is not set to red above, it will set it to the modification element allowing it to be modified*/}

        {/*total cases*/}
        <Typography className="infoBox__total" color="textSecondary">
            {total} Total                {/* here we use the total cases which was passed in*/}
        </Typography>
    </CardContent>
  </Card>);
}

export default InfoBox;

//rfce - react functional component

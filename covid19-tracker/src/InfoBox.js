import React from "react";
import { Card,  CardContent, Typography} from "@material-ui/core"; 
//there have been pulled from Material UI and will be used later, card content is used as background
import "./InfoBox.css"; //this provides styling to the info boxes 

function InfoBox({ title, cases, total, active, ...props}) {  //this will be the three things requried to be passed in when creating an infobox
  return (
  <Card 
    onClick={props.onClick} 
    className={
      `infoBox 
      ${active && "infoBox--selected"}`
    }
  > 
  {/*notice how we use spread(..props) to store onClick, hence when the spread is passed in, the attri onClick(in side of card) gives it a clickable functionality */}{/* here we make use of MaterialUI card element, hence the InfoBox is made up of card*/}
  {/*the classname attri allows for string interpolation, to check that if its active & check if at the specific class if its active (note: underscore __(element change)  is not used because we are using BAM naming convention, use of DASH --(modification of element) is to represent that we are modifiying the element, while underscore means that it is an element)  */}
    
    <CardContent>
        {/*title */}
        <Typography className="infoBox__title" color="textSecondary">
          {title}                      {/* here we use the title which was passed in*/}
        </Typography>
        
        {/*cases (increasing cases) */}
        <h2 className="infoBox__cases">{cases}</h2>

        {/*total cases*/}
        <Typography className="infoBox__total" color="textSecondary">
            {total} Total                {/* here we use the total cases which was passed in*/}
        </Typography>
    </CardContent>
  </Card>);
}

export default InfoBox;

//rfce - react functional component

import React from "react";
import { Card,  CardContent, Typography} from "@material-ui/core"; 
//there have been pulled from Material UI and will be used later, card content is used as background
import "./InfoBox.css"; //this provides styling to the info boxes 

function InfoBox({title, cases, total}) {  //this will be the three things requried to be passed in when creating an infobox
  return <Card className="infoBox">                           {/* here we make use of MaterialUI card element, hence the InfoBox is made up of card*/}
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
  </Card>;
}

export default InfoBox;

//rfce - react functional component

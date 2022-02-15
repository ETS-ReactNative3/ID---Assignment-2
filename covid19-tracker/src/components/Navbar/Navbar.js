import React, { Component } from 'react' //import react to use react
import { MenuItems } from "./Menuitems"  //here we import Menuitem which contain information regarding each pages
import "./Navbar.css"

//import { MenuItem } from '@material-ui/core'
//import { NavItem } from 'react-bootstrap'


class Navbar extends Component {
    state = { clicked: false} //this is a state to determine if the user clciks on something on will change the bool value 

    render() {
        return(
            <nav className="navbar__items">
                <h1 className="navbar__logo">
                    React {/*<i className="fab fa-react"></i>*/}
                </h1>
                {/*i tag styles the icon */}
                
                
                <div className="menu__icon" onClick={this.handleClick}>{/* the handleClick, is the func that will modify the state from its default value of false*/}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} >
                        {/*this is crucial by using font awesome imported from (ID---Assignment-2\covid19-tracker\public\index.html) to display the burger button for our nav bar*/}
                    </i>{/*this checks for the state if given green light (value = true) then it will set the className to the hamburger, however if clciked once more the state value changes (false) it will become the x-icon*/}
                    
                </div>{/*this is the hamburger menu, whenever you clcik on this icon there will be a few classes containing the diff pages */}

                <ul>
                    {MenuItems.map((item, index) => {    //obj is defiend as item
                        return (
                            <li key={index}> {/*assign a key to the li in each ite */}
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>  //through each iteration item is iterated and classname/ href/ title is retrived(from Menu Items) and set to be a argument or displayed
                        )
                    })}                    
                </ul>
            </nav>
        )
    }
}

export default Navbar
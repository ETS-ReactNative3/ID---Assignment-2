import React, { Component } from 'react' //import react to use react
import { MenuItems } from "./Menuitems"  //here we import Menuitem which contain information regarding each pages
import "./Navbar.css"


//import { MenuItem } from '@material-ui/core'
//import { NavItem } from 'react-bootstrap'


class Navbar extends Component {
    state = { clicked: false} //this is a state to determine if the user clciks on something on will change the bool value 


    //this is a function that is called when the hamburger is clicked
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }//handleClcik will throw (=>) the function, which essentially changes it to what the user clicks, ammending the state



    render() {
        return(
            <nav className="navbar__items" >
                <h1 className="navbar__logo">
                    React {/*<i className="fab fa-react"></i>, this displays the react logo from fontawesome.com*/}
                </h1>
                {/*i tag styles the icon */}
                
                
                <div className="menu__icon" onClick={this.handleClick}>{/* the handleClick, is the func that will modify the state from its default value of false, by capturing if the user continuouslly clcik this tag*/}
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} >
                        {/*this is crucial by using fontawesome.com imported from (ID---Assignment-2\covid19-tracker\public\index.html) to display the burger button for our nav bar, the alternative option allows you to click once more changing the state value and the font value icon will become an 'X'*/}
                    </i>{/*this checks for the state if given green light (value = true) then it will set the className to the hamburger, however if clciked once more the state value changes (false) it will become the x-icon*/}
                    
                </div>{/*this is the hamburger menu, whenever you clcik on this icon there will be a few classes containing the diff pages */}

                {/*when we click the hamburger button we want the pages to show cases in mobile form, hence we add a class, and when the screen size is small reaching a certain limit it will class the class to be displayed*/}
                {/*hence the class assigned to this ul(below), when the hamburger button is clicked it will add the class name of active to the nav menu, making it display in ham burger form instead of a normal nav-menu, so if the hamburger is not clicked it will just be the normal menu*/}
                <ul className={this.state.clicked ? 'nav__menu__active' : 'nav__menu'}>
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
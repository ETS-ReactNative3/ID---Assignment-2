import React, { Component } from 'react' //import react to use react
import { MenuItems } from "./Menuitems"  //here we import Menuitem which contain information regarding each pages
import "./Footer.css"


//import { MenuItem } from '@material-ui/core'
//import { NavItem } from 'react-bootstrap'


class Footer extends Component {
    state = { clicked: false} //this is a state to determine if the user clciks on something on will change the bool value 

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }//handleClcik will throw (=>) the function, which essentially changes it to what the user clicks, ammending the state

    render() {
        return(
            <nav className="footer__items">

                {/*when we click the hamburger button we want the pages to show cases in mobile form, hence we add a class, and when the screen size is small reaching a certain limit it will class the class to be displayed*/}
                {/*hence the class assigned to this ul(below), when the hamburger button is clicked it will add the class name of active to the nav menu, making it display in ham burger form instead of a normal nav-menu, so if the hamburger is not clicked it will just be the normal menu*/}
                <ul className="footer__menu">
                    {MenuItems.map((item, index) => {    //obj is defiend as item
                        return (
                            <li key={index}> {/*assign a key to the li in each ite */}
                                <a className={item.cName} href={item.url} target="_blank"> {/*target blank is used so that user do not get mixed up and open another page instead of having to going to another website on the same page and losing sight of main page*/}
                                    <i className={item.faLogo} width="30"></i>
                                </a>{/*i tag is a placeholder tag for fontawesome icon*/}
                            </li>  //through each iteration item is iterated and classname/ href/ title is retrived(from Menu Items) and set to be a argument or displayed
                        )
                    })}                    
                </ul>
                

                <p className="copy__right">© 2021 Government of Singapore Last updated on 16 Oct 2021</p>
            </nav>
        )
    }
}

export default Footer
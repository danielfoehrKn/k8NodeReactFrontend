import React from 'react'
import {SideNavItem} from 'react-materialize'
class NavigationBar extends React.Component {

    render() {
        return (
            <div>
                <nav className="white fixed" role="navigation">
                    <div className="nav-wrapper container">
                        <a href="#" className="brand-logo center"><img src="/stylesheets/logo.png"/></a>

                        <ul className="right hide-on-med-and-down">
                            <li><a href="https://stackoverflow.com/users/7299049/daniel-föhr">Stackoverflow</a></li>
                            <li><a href="https://github.com/danielfoehrKn/k8Resources">Github</a></li>

                        </ul>

                        <ul id="nav-mobile" className="side-nav">
                            <SideNavItem userView
                                         user={{
                                             background: '/stylesheets/background1.jpg',
                                             image: '/stylesheets/logo.png',
                                             name: 'Daniel Föhr',
                                             email: 'daniel.foehr@gmail.com'
                                         }}
                            />
                            <SideNavItem href='#!icon' icon='cloud'>Stackoverflow</SideNavItem>
                            <SideNavItem href='#!second' icon='view_module'>Github</SideNavItem>
                            <SideNavItem divider />
                            <SideNavItem subheader>Legal</SideNavItem>
                            <SideNavItem waves href='#!third'>Legal.com</SideNavItem>
                        </ul>
                        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </nav>



                
            </div>
        );
    }
}

module.exports = NavigationBar;
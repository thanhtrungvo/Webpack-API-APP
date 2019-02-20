import React from 'react';
import {Route, Link} from 'react-router-dom'
import * as linkto from '../routes_menus/linkto'
import './Menu.css'
const MenuLink = ({label, to, exactOrNot})=>{
    return(
        <Route
            path={to} exact={exactOrNot} children={({match})=>{
                var active = match ? 'active' : ''
                return(
                    <li className={`${active} nav-item`}>
                        <Link to={to} className={`${active} nav-link`} href="#">{label}</Link>
                    </li>
                )
            }}
        />
    )
}
var showMenu=(menus)=>{
    var result = null;
    if(menus.length>0){
        result = menus.map((menu, index)=>{
            return(
                <MenuLink key={index} label={menu.name} to={menu.to} exactOrNot={menu.exact}/>
            )
        })
    }
    return result;
}
class Menu extends React.Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fix">
            <ul className="navbar-nav">
                {showMenu(linkto.menus)}
            </ul>
        </nav>
        )

    }
}

export default Menu;
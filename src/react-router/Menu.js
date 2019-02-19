import React from 'react'
import {Link, Route} from 'react-router-dom'
import './Menu.css'

const menus = [
    {name: 'Trang chủ', to : '/', exact: true},
    {name: 'Link 1', to : '/link1', exact: false},
    {name: 'Link 2', to : '/link2', exact: false},
    {name: 'Link 3', to : '/link3', exact: false},
    {name: 'Sản Phẩm', to : '/product', exact: false},
    {name: 'Login', to : '/login', exact: false},
]

const MenuLink = ({label, to, exact}) =>{
    return(
        <Route
            path={to} exact={exact} children = {({match})=>{
                var active = match ? 'active' : '';
                return(
                    <li className={`${active}  nav-item`} >
                        <Link className={`${active}  nav-link`} to={to} >{label}</Link>
                    </li>
                )
            }}
        />
    )
}


class Menu extends React.Component{
    showMenu = (menus)=>{
        var result = null;
        if(menus.length > 0){
            result = menus.map((ele,index)=>{
                return(
                    <MenuLink key={index} label={ele.name} to={ele.to} exact={ele.exact} ></MenuLink>
                )
            })
        }
        return result;
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fix-menu mb-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        {this.showMenu(menus)}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;
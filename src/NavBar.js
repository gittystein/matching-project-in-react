import './NavBar.css';
import { NavLink } from "react-router-dom";
import ToggleColorMode from "./Context";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { IconButton } from '@mui/material';
import * as React from 'react';

const NavBar = (props) => {

    const [value, setValue] = React.useState(0);

    return (<>

        <nav className="navBar" >
            <NavLink className={(data) => (data.isActive ? "active" : "active2")}
                to="donateList" >תרומות-תורמים</NavLink>
            <NavLink className={(data) => (data.isActive ? "active" : "active2")}
                to="donateForm" >תרום כאן</NavLink>
            <ToggleColorMode />
            <IconButton className="dolar" sx={{ ml: 1 }} onClick={() => {
                props.dolar === 1 ? props.setDolar(0) : props.setDolar(1)
                props.changeCoin()
            }}>
                {props.dolar === 1 ? < AttachMoneyIcon /> : <MoneyOffIcon />}
            </IconButton>
        </nav>

    </>)
}

export default NavBar;
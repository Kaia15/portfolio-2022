import React, {useState} from 'react'
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
// import SchoolIcon from '@mui/icons-material/School';
import NavigationCSS from './navigation.module.css'

const NavigationBar = () => {
    const components = ["Home", "Education", "Projects", "Experiences", "Contact"]
    const [val, setVal] = useState("Home");
    const navigate = useNavigate();
    // const CART = "CART" + "(" + (cart.length).toString() + ")"
    const handleChange = (e,newValue) => {
        setVal(newValue)
    }
    const handleClick = (val) => {
        navigate(`${val}`);
    }

    return (
        <div className={NavigationCSS.bar}>
            <Tabs
                variant="scrollable"
                value = {val}
                onChange = {handleChange}
                textColor="primary"
                indicatorColor="primary"
                scrollButtons={false}
                aria-label="visible arrows tabs example"
            >
                {components.map((compo, index) => {
                let lower = "/" + compo.toLowerCase()
                return (
                    <Tab value={compo} label={compo} onClick = {() => handleClick(lower)} style = {{color: '#ccd6f6'}}/>
                )
                })}
            </Tabs>
        </div>
    )
}

export default NavigationBar
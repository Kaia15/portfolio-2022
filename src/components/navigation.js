import React, {useState} from 'react'
import { Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        <div style = {{display: "flex", flexDirection: "row", height: '50px', padding: '12px 28vw', position: 'sticky'}}>
            <Tabs
                value = {val}
                onChange = {handleChange}
                textColor="primary"
                indicatorColor="primary"
                aria-label="primary tabs example"
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
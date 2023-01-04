import ContactCSS from './contact.module.css';
import { Button } from '@mui/material';

const Section4 = () => {
    return (
        <div className={ContactCSS.container}>
            <div className={ContactCSS.text}>
            <p style = {{fontSize: 'clamp(40px, 8vw, 80px)', 
                fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif,"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace', 
                fontWeight: 'bolder', padding: '4vh 0px 4px 0px'}}> Get in touch. </p>
            </div>
        </div>
    )
}

export default Section4
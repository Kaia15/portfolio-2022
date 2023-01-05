import ContactCSS from './contact.module.css';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';

const Section4 = () => {
    return (
        <div className={ContactCSS.container}>
            <div className={ContactCSS.text}>
            <p style = {{fontSize: 'clamp(40px, 8vw, 80px)', 
                fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif,"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace', 
                fontWeight: 'bolder', margin: '64px 0px 0px 0px', color: 'rgb(100, 255, 218)', textAlign: 'center'}}> Get in touch </p>
            <p style={{color: '#a8b2d1', margin: '0px 12px', fontSize: '18px'}}> I'm currently based in the U.S. <br /> 
            I am looking forward to any tech opportunities <br /> with any locations inside and outside the U.S.
            </p>
            <div className = {ContactCSS.icons}>
                <a href = 'https://www.instagram.com/t_trannna/'>
                <InstagramIcon fontSize='large'/>
                </a>
                <a href = 'https://www.linkedin.com/in/tran-ong-26308a20a/'>
                <LinkedInIcon fontSize='large'/>
                </a>
                <a href = 'https://github.com/Kaia15'>
                <GitHubIcon fontSize='large'/>
                </a>
                <a href = 'baotranongtran@gmail.com'>
                <MailIcon fontSize='large'/>
                </a>
                
            </div>
            </div>
        </div>
    )
}

export default Section4
import React from "react";
import { Divider, Typography, CardActions, Button, Card, CardContent } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import {Link} from 'react-router-dom'
import ProjectCSS from './projects.module.css';

const Section2 = () => {
    const nums = ['Simply, work effectively', 'Ecommerce-App', 'Drinking behaviors & personalities prediction']
    const dates = ['Oct 2022 - Nov 2022', 'Jun 2022 - Jul 2022', 'Nov 2021 - Dec 2021']
    const content = ['MERN-project, Material UI, WebSocket, APIs', 'React Website', 'Research, RStudio, Psychology']
    const src = ['', 'https://ecommerce-web-v1.netlify.app']
    const git = ['https://github.com/Kaia15/mern-work-app-v1', 'https://github.com/Kaia15/eccomerce-web-01', 'https://github.com/Kaia15/RProject']
    return (
        <div className = {ProjectCSS.container}>
            <div className = {ProjectCSS.header}>
                <div style = {{flex: '4'}}></div>
                <div style = {{display: 'flex', flexDirection: 'row', flex: '2'}}>
                <p style = {{fontSize: '40px', 
                    fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif,"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace', 
                    fontWeight: 'bolder', margin: '32px 0px 0px 20vw', color: '#64ffda'}}> 02 </p>
                <Divider orientation="horizontal" style = {{backgroundColor: '#ccd6f6', margin: '54px 0px 96px 8px', width: '180px'}}/>
                </div>
                <div style = {{flex: '4'}}></div>
            </div>
            <div className={ProjectCSS.bod}>
                {nums.map((num,id) => {
                    return (
                        <Card style = {{margin: '12px 12vw', minWidth: '275px', backgroundColor: '#0a192f', color: '#ccd6f6', textAlign: 'left'}}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, color: '#ccd6f6' }} color="text.secondary" gutterBottom>
                            <i> Personal project </i>
                            </Typography>
                            <Typography variant="h5" component="div" style = {{color: '#64ffda'}}>
                            {num}
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: '#ccd6f6' }} color="text.secondary">
                            {dates[id]}
                            </Typography>
                            <Typography variant="body2" style = {{color: '#ccd6f6'}}>
                            {content[id]}
                            <br />
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href = {git[id]}>
                            <GitHubIcon fontSize="large" style = {{margin: '4px 10px'}}/>
                            </a>
                            {(id == 1) && 
                            <a href = {src[id]}>
                            <LaunchIcon fontSize="large" style = {{margin: '4px'}}/>
                            </a>
                            }
                        </CardActions>
                        </Card>
                )
                })}
            </div>
        </div>
    )
}

export default Section2
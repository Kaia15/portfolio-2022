import React, {useState, useEffect} from "react";
import ExpCSS from './exp.module.css';
import { Divider, Card, CardActions, CardContent, Typography } from "@mui/material";

const Section3 = () => {
    const nums = ['Software Developer Intern', 'Florence Day Volunteer']
    const coms = ['Boost, VN', 'Denison University']
    const dates = ['May 2022 - Sep 2022', 'Sep 2021 - Oct 2021']
    const links = ['http://boost.associates/', 'https://denison.edu/']
    const descriptions = ['', 'Instructed 30+ high school students to join Florence Day in Ohio, to promote career opportunities in statistics and data science.']
    const a = [0,1]
    const hl = ['Skills: ', 'Awards: ']
    const d = ['React.js, Express.js, APIs, Material UI, HTML, CSS', 'Forbes B. Wiley Award']

    return (
        <div className = {ExpCSS.container}>
            <div className={ExpCSS.d1}>
                <div className={ExpCSS.d11}>
                <div style = {{flex: '2', display: 'flex', flexDirection: 'row'}}>
                <p style = {{fontSize: '40px', 
                    fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif,"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace', 
                    fontWeight: 'bolder', margin: '32px 0px 0px 8vw', color: '#64ffda'}}> 03.1 </p>
                <div className={ExpCSS.divider}>
                <Divider orientation="horizontal" />
                </div>
                </div>
                {a.map((b,id) => {
                    return (
                        <div className={ExpCSS.p1}></div>
                    )
                })}
                </div>
                <div className={ExpCSS.d12}>
                    {nums.map((num,id) => {
                        return (
                            <Card style = {{margin: '12px 12vw', minWidth: '275px', backgroundColor: '#0a192f', color: '#ccd6f6', textAlign: 'left'}}>
                            <CardContent>
                            <Typography sx={{ fontSize: 14, color: '#ccd6f6' }} color="text.secondary" gutterBottom>
                            <i><a href = {links[id]} style = {{textDecoration: 'none'}}> {coms[id]} </a></i>
                            </Typography>
                            <Typography variant="h5" component="div" style = {{color: '#64ffda'}}>
                            {num}
                            </Typography>
                            <Typography sx={{ mb: 1.5, color: '#ccd6f6' }} color="text.secondary">
                            {dates[id]}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                        </Card>
                        )
                    })}
                </div>
            </div>
            <div className={ExpCSS.d2}>
                <div className={ExpCSS.d11}>
                <div style = {{flex: '2', display: 'flex', flexDirection: 'row'}}>
                <p style = {{fontSize: '40px', 
                    fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif,"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace', 
                    fontWeight: 'bolder', margin: '32px 0px 0px 8vw', color: '#64ffda'}}> 03.2 </p>
                <div className={ExpCSS.divider}>
                <Divider orientation="horizontal" />
                </div>
                </div>
                <div style = {{flex: '4'}}></div>
                <div style = {{flex: '4'}}></div>
                </div>
                <div className={ExpCSS.d12}>
                    <Card style = {{margin: '12px 12vw', minWidth: '275px', backgroundColor: '#0a192f', color: '#ccd6f6', textAlign: 'left'}}>
                    <CardContent>
                        {hl.map((item,id) => {
                            return (
                                <div style = {{display: 'flex', flexDirection: 'row'}}>
                                <Typography sx={{ fontSize: 18, color: '#64ffda', margin: '0px 8px'}} color="text.secondary" gutterBottom>
                                <i> {item} </i>
                                </Typography>
                                <Typography sx={{ mb: 1.5, color: '#ccd6f6' }} color="text.secondary">
                                    {d[id]}
                                </Typography>
                                </div>
                            )
                        })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Section3
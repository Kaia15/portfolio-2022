import React, { useState, useEffect } from "react";
import { storage } from "../../fire/firebase";
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { Card, CardMedia, CardContent, Typography, Box, ListItem, List, ListItemText } from "@mui/material";
import Divider from '@mui/material/Divider';
import EduCSS from './edu.module.css';

const Section1 = () => {
    const [eduUrls, setEduUrls] = useState([])
    useEffect(() => {
        listAll(ref(storage,"/education/")).then(res => res.items.map(item => {
          getDownloadURL(ref(storage,item.fullPath)).then((url) => {
            setEduUrls(prev => [...prev, url])
          })
        }))
      }, [])
    console.log(eduUrls)
    return (
        <div className={EduCSS.box}>
            <div style = {{display: 'flex', flexDirection: 'row'}}>
            <p style = {{fontSize: '32px', 
                fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif,"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace', 
                fontWeight: 'bolder', margin: '32px 0px 0px 16vw', color: '#64ffda'}}> 01 </p>
            <Divider orientation="horizontal" style = {{backgroundColor: '#ccd6f6', margin: '54px 10px', width: '180px'}}/>
            </div>
            <div className={EduCSS.container}>
            {eduUrls !== null && eduUrls.map(url => {
                return (
                    <div>
                    <Card className = {EduCSS.card} style = {{backgroundColor: '#0a192f', color: '#ccd6f6'}}>
                    <CardMedia
                        component="img"
                        className = {EduCSS.image}
                        image={url}
                        alt="Denison"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                        <CardContent className = {EduCSS.content}>
                        <Typography component="div" style = {{fontSize: '24px', 
                fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif,"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace', 
                fontWeight: 'bolder', padding: '0px 20px'}}>
                            Denison University. 
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            2021-2025
                        </Typography>
                        <List style = {{margin: '0px 12px'}}>
                        <ListItem>
                            <ListItemText primary="B.S Computer Science" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Latest Classworks: DS and Algorithms, Linear Algebra" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Major GPA: 3.98/4.0" />
                        </ListItem>
                        </List>
                        </CardContent>
                    </Box>
                    </Card>
                    </div>
                )
            })}
            </div>
        </div>
        
    )
}

export default Section1
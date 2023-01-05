import React, { useState, useEffect } from "react";
import { storage } from "../../fire/firebase";
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { Button, Divider } from "@mui/material";
import BannerCSS from './banner.module.css'

const Banner = () => {
    const [avatarUrl, setAvatarUrl] = useState("")
    useEffect(() => {
        listAll(ref(storage,"/avatar/")).then(res => res.items.map(item => {
          getDownloadURL(ref(storage,item.fullPath)).then((url) => {
            setAvatarUrl(url)
          })
        }))
      }, [])
    return (
        <div className={BannerCSS.container}>
            <div className={BannerCSS.desc}>
            <div className={BannerCSS.text}>
            <p style = {{fontSize: 'clamp(40px, 8vw, 80px)', 
                fontFamily: '"Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif,"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace', 
                fontWeight: 'bolder', margin: '54px 0px 4px 0px'}}> Veronica Ong. </p>
            <p style={{color: '#a8b2d1', margin: '0px 12px', fontSize: '20px'}}> I'm CS major @Denison, U.S. <br /> 
                I have passions about coding and tech. I'm in the journey to learn about web and application development!</p>
            
            <Button variant = 'outlined' size = 'large' 
              style = {{margin: '16px 12px', color: '#64ffda'}}> Contact me
            </Button>

            </div>
            </div>
            <div className={BannerCSS.image}>
            <img src = {avatarUrl} style = {{borderRadius: '50%', width: '60%', height: '68%'}} />
            </div>
        </div>
    )
}

export default Banner
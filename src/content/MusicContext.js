import React, { createContext, useEffect, useState } from "react";

export const MusicContext = createContext()
export const MusicProvider = ({ children }) => {
    const musicList = [{name: '『 vivi 』', url: '/images/s.mp3'}, ]
    let num = Math.floor(Math.random() * (musicList.length))

    const [audioStatus, setAudioStatus] = useState({ nowPlay: musicList[num], nowStatus: 'stop' })
    const audioController = (type) => { 
        switch( type ) {
            case 'play': 
                setAudioStatus({ nowPlay: musicList[num], nowStatus: 'stop' })
                break
            case 'stop':
                setAudioStatus({ nowPlay: musicList[num], nowStatus: 'play' })
                break
        }
    }

    return (
        <MusicContext.Provider value={[ audioStatus, audioController ]}>
            { children }
            { audioStatus.nowStatus === 'play' && (<audio className={'audio'} src={musicList[num].url} autoPlay={true}></audio>) }
        </MusicContext.Provider>
    )
}
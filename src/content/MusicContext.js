import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../components/useLocalStorage";

const musicList = [{name: 'vivi', url: '/images/s.mp3'}, {name: 'me', url: '/images/ss.mp3'}]
let num = Math.floor(Math.random() * (musicList.length))

export const MusicContext = createContext()
export const MusicProvider = ({ children }) => {
    
    const [audioVolume, setAudioVolume] = useLocalStorage('audioVolume', 0.5)
    const [audioStatus, setAudioStatus] = useState({ nowPlay: musicList[num], nowStatus: 'stop', nowVolume: audioVolume })
    const audioController = (type) => { 
        switch( type.status ) {
            case 'play':
                setAudioVolume(type.volume)
                setAudioStatus({ nowPlay: musicList[num], nowStatus: 'stop', nowVolume: type.volume })
                document.querySelector('.audio').pause()
                break
            case 'stop':
                setAudioVolume(type.volume)
                setAudioStatus({ nowPlay: musicList[num], nowStatus: 'play', nowVolume: type.volume })
                document.querySelector('.audio').play()
                break
            case 'volume':
                setAudioVolume(type.volume)
                setAudioStatus({ nowPlay: musicList[num], nowStatus: audioStatus.nowStatus, nowVolume: type.volume })
                break
            case 'next':
                setAudioVolume(type.volume)
                musicList.length > num+1 ? num++ : num=0
                setAudioStatus({ nowPlay: musicList[num], nowStatus: audioStatus.nowStatus, nowVolume: type.volume })
                var playPromise = document.querySelector('.audio').play();
                if(playPromise !== undefined) {
                    playPromise.then(_ => {
                        document.querySelector('.audio').play()
                    })
                }
                break
        }
        document.querySelector('.audio').volume = type.volume
    }

    const eneded = () => {
        audioController({ status: 'next', volume: document.querySelector('.audio_volume').value })
    }

    return (
        <MusicContext.Provider value={[ audioStatus, audioController ]}>
            { children }
            <audio className={'audio'} src={musicList[num].url} onEnded={eneded}></audio>
        </MusicContext.Provider>
    )
}
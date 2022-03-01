import { useContext, useCallback, useState, useEffect } from "react";
import { MusicContext } from "../content/MusicContext";
import styles from "./Music.module.css"

function Music() {
    const [audioStatus, audioController] = useContext(MusicContext)
    const onClickPlayMusicButton = useCallback(() => {
        audioController(audioStatus.nowStatus )
    }, [audioStatus])

    const vols = () => {
        document.querySelector('.audio').volume = 0.2
    }

    const [volume, setVolume] = useState(0.5)
    useEffect(() => { 
        console.log(volume)
    }, [volume])

    return (
        <div className={ styles.music__frame }>
            <span className={ styles.music__name }>{audioStatus.nowPlay.name}</span>
            <div className={ styles.music__time }></div>
            <img className={ styles.music__action } onClick={onClickPlayMusicButton} src={audioStatus.nowStatus === 'play' ? '/music-stop.svg' : '/music-play.svg'} />
            <img className={ styles.music__icon } src='/music-volume.svg' />
            <input className={'audio_volume'} type='range' orient="vertical" min={0} max={1} step={'0.1'}></input>
        </div>
    )
}
export default Music
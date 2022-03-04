import { useContext, useCallback, useState, useEffect } from "react";
import { MusicContext } from "../content/MusicContext";
import styles from "./Music.module.css"

function Music() {
    const [audioStatus, audioController] = useContext(MusicContext)
    const onClickPlayMusicButton = useCallback(() => {
        audioController({ status: audioStatus.nowStatus, volume: audioStatus.nowVolume })
    }, [audioStatus])

    const vols = () => {
        audioController({ status: 'volume', volume: document.querySelector('.audio_volume').value })
    }

    const next = () => {
        audioController({ status: 'next', volume: document.querySelector('.audio_volume').value })
    }

    return (
        <div className={ styles.music__frame }>
            <span className={ styles.music__name }>『 {audioStatus.nowPlay.name} 』</span>
            <div className={ styles.music__time }></div>
            <img className={ styles.music__action } onClick={onClickPlayMusicButton} src={audioStatus.nowStatus === 'play' ? '/music-stop.svg' : '/music-play.svg'} />
            <img className={ styles.music__action } onClick={next} src='/music-next.svg' />
            <img className={ styles.music__icon } src='/music-volume.svg' />
            <input className={'audio_volume'} type='range' orient="vertical" min={0} max={1} step={'0.05'} value={audioStatus.nowVolume} onChange={vols}></input>
        </div>
    )
}
export default Music
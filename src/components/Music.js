import { useContext, useCallback, useState, useEffect } from "react";
import { MusicContext } from "../content/MusicContext";
import styles from "./Music.module.css"

function Music() {
    const [audioStatus, audioController] = useContext(MusicContext)
    const onClickPlayMusicButton = useCallback(() => {
        audioController({ status: audioStatus.nowStatus, volume: audioStatus.nowVolume })
    }, [audioStatus])

    const vols = () => {
        audioController({ status: 'volume', volume: document.querySelector('.music__input__volume').value })
    }

    const next = () => {
        audioController({ status: 'next', volume: document.querySelector('.music__input__volume').value })
    }

    return (
        <div className={ styles.music__frame }>
            <div className={ styles.music__name }>『 <marquee scrolldelay={500}>{audioStatus.nowPlay.name}</marquee> 』</div>
            <div className={ styles.music__time }></div>
            <img className={ styles.music__icon } onClick={onClickPlayMusicButton} src={audioStatus.nowStatus === 'play' ? '/music-stop.svg' : '/music-play.svg'} />
            <img className={ styles.music__icon } onClick={next} src='/music-next.svg' />
            <div className={ styles.music_area }>
                <img className={ styles.music__icon } src='/music-volume.svg' />
            </div>
            <input className={ `${styles.music__input__volume} music__input__volume` } type='range' orient='vertical' min={0} max={1} step={'0.05'} value={audioStatus.nowVolume} onChange={vols}></input>
        </div>
    )
}
export default Music
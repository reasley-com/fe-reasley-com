import { Link } from "react-router-dom";
import MainTitle from "./MainTitle";
import styles from "./Notice.module.css";

function Notice() {
    const noticeContent = [
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지' },
    ]
    return ( 
        <div className={ styles.notice__frame }>
            <MainTitle title='공 지' />
            { noticeContent.map(( content ) => (
                <div className={ styles.notice__content__frame }>
                    <span>{ content.title }</span>
                    <span>{ content.category }</span>
                </div>
            )) }
        </div>
    )
}
export default Notice
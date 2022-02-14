import { Link } from "react-router-dom";
import Maintitle from "./Maintitle";
import styles from "./Notice.module.css";

function Notice() {
    const noticeContent = [
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지', id: '32' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지', id: '33' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지', id: '34' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지', id: '35' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지', id: '36' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지', id: '37' },
        { title: '[모집] 웹 RPG 게임 프로젝트', category: '개발 공지', id: '38' },
    ]
    return ( 
        <div className={ styles.notice__frame }>
            <Maintitle title='공 지' />
            { noticeContent.map(( content, index ) => (
                <div className={ styles.notice__content__frame } key={ index } >
                    <Link to={ '/post/' + content.id }>
                        <span>{ content.title }</span>
                    </Link>

                    <Link to={ '/category/' + content.category }>
                        <span>{ content.category }</span>
                    </Link>
                </div>
            )) }
        </div>
    )
}
export default Notice
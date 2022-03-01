import { useContext } from "react";
import { ThemeContext } from "../content/ThemeContext";
import Header from '../components/Header'

function Post() {
    const [theme, ThemeToggle] = useContext(ThemeContext)
    
    return (
        <div className={ `frame ${theme}` }>
            <div className='detail'>
                <Header />
            </div>
        </div>
    )
}

export default Post;
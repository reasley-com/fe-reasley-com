import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Platform() {
    const headerContentList = ['home', 'blog', 'project', 'service']
    const headerImageList   = { themeLogo: '/theme-logo.png', themeLight: '/theme-light.svg', themeDark: '/theme-dark.svg', themeSearch: '/theme-search.svg' }
    return ( 
        <div>
            <div>
                <div className={ styles.themeMenu }>
                    <img alt='theme' src={ headerImageList.themeLight } className={ styles.themeLight } />
                </div>

                <div className={ styles.themeMenu }>
                    <img alt='search' src={ headerImageList.themeSearch } className={ styles.themeSearch } />
                </div>
            </div>
        </div>
    )
}
export default Platform
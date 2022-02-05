import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    const headerContentList = ['Home', 'Blog', 'Project', 'Service']
    const headerImageList   = { themeLogo: '/theme-logo.png', themeLight: '/theme-light.svg', themeDark: '/theme-dark.svg', themeSearch: '/theme-search.svg' }
    return ( 
        <header>
            <div>
                <img alt='logo' src={ headerImageList.themeLogo } />
                { headerContentList.map((content) => <span><Link to={ '/' + content }>{ content }</Link></span> ) }
            </div>

            <div>
                <img alt='theme' src={ headerImageList.themeLight } className={ styles.themeLight } />
                <img alt='search' src={ headerImageList.themeSearch } className={ styles.themeSearch } />
            </div>
        </header>
    )
}
export default Header
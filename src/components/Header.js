import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    const headerContentList = ['home', 'blog', 'project', 'service']
    const headerImageList   = { themeLogo: '/theme-logo.png', themeBar: '/theme-bar.svg', themeLight: '/theme-light.svg', themeDark: '/theme-dark.svg', themeSearch: '/theme-search.svg' }
    return ( 
        <header>
            <div>
                <img alt='logo' src={ headerImageList.themeLogo } />
                { headerContentList.map((content) => <div key={ content } className={ styles.themeMenuDesktop }><Link to={ '/' + content }><img alt='menu' src={ '/header-'+content+'.png' } /></Link></div> ) }
            </div>

            <div>
                <div className={ styles.themeMenuDesktop }>
                    <img alt='theme' src={ headerImageList.themeLight } className={ styles.themeLight } />
                </div>

                <div className={ styles.themeMenuDesktop }>
                    <img alt='search' src={ headerImageList.themeSearch } className={ styles.themeSearch } />
                </div>

                <div className={ styles.themeMenuMobile }>
                    <img alt='bar' src={ headerImageList.themeBar } className={ styles.themeSearch } />
                </div>
            </div>
        </header>
    )
}
export default Header
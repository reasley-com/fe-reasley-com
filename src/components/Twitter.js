import { useContext } from "react";
import { Timeline } from 'react-twitter-widgets'
import { ThemeContext } from "../content/ThemeContext";
import Maintitle from './Maintitle';
import styles from "./Twitter.module.css";

function Twitter() {
    const [theme, toggleTheme] = useContext(ThemeContext)

    return ( 
        <div className={ styles.twitter }>
            <Maintitle title='트위터' />
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'reasley_com'
                }}
                options={{
                    height: '400',
                    chrome: 'noheader, nofooter, noscrollbar',
                    theme: theme === 'themeLight' ? 'light' : 'dark',
                }}
                renderError={_err => 'Twitter timeline load fail' }
            />
        </div>
    )
}
export default Twitter
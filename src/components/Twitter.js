import { Timeline } from 'react-twitter-widgets'
import Maintitle from './Maintitle';
import styles from "./Twitter.module.css";

function Twitter() {
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
                    chrome: 'noheader, nofooter',
                    theme: 'ligth',
                    // theme: 'dark'
                }}
                renderError={_err => 'Twitter timeline load fail' }
            />
        </div>
    )
}
export default Twitter
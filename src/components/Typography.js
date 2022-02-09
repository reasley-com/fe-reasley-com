import styles from './Typography.module.css';

function Typography() {
    return ( 
        <div className={ styles.typography__frame }>
            <div className={ styles.typography__text__frame }>
                <div className={ styles.typography__text__top }>
                    <span className={ styles.typography__text__bold }>Designer</span>
                </div>
                
                <div className={ styles.typography__text__mid }>
                    <span className={ styles.typography__text__bsolid }>reasley blog</span>
                    <span className={ styles.typography__text__nsolid }>A blog that likes whales</span>
                </div>
                
                <div className={ styles.typography__text__bot }>
                    <span className={ styles.typography__text__nsolid }>Interested in clean codes</span>
                    <span className={ styles.typography__text__bold }>Developer</span>
                </div>
            </div>

            <div className={ styles.typography__image__frame }>
                <div className={ styles.typography__image__space }></div>
                <div className={ styles.typography__image__value }>
                    <img alt='logo' className={styles.typography__image} src='/typography-logo.png' />
                </div>
            </div>
        </div>
    )
}
export default Typography
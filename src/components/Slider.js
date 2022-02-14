import PropTypes from "prop-types"
import styles from "./Slider.module.css";

function Slider({ src }) {
    return ( 
        <div className={ styles.slider__frame }>
            <img src={ src } className={ styles.slider__content } />
        </div>
    )
}

Slider.propTypes = {
    src: PropTypes.string.isRequired
}

export default Slider
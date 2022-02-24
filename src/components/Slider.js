import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import styles from "./Slider.module.css";

function Slider({ src }) {
    return ( 
        <div className={ styles.slider__frame }>
            <Link to={ '/post/1' }>
                <img src={ src } className={ styles.slider__content } />
            </Link>
        </div>
    )
}

Slider.propTypes = {
    src: PropTypes.string.isRequired
}

export default Slider
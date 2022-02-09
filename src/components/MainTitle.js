import PropTypes from "prop-types"
import styles from "./MainTitle.module.css";

function MainTitle({ title }) {
    return ( 
        <div>
            <p>{ title }</p>
            <div className={ styles.decoBox }></div>
        </div>
    )
}

MainTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default MainTitle
import PropTypes from "prop-types"
import styles from "./Maintitle.module.css";

function Maintitle({ title }) {
    return ( 
        <div>
            <p>{ title }</p>
            <div className={ styles.decoBox }></div>
        </div>
    )
}

Maintitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default Maintitle
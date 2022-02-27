import { useContext, useEffect, useState } from "react";
import Header from '../components/Header'
import Notice from "../components/Notice";
import Platform from "../components/Platform";
import Space from "../components/Space";
import Typography from "../components/Typography";
import Carousel from "../components/Carousel";
import Twitter from "../components/Twitter";
import { ThemeContext } from "../content/ThemeContext";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        setLoading(false)
    }, [])

    const [theme, ThemeToggle] = useContext(ThemeContext)

    return (
        <div className={ `frame ${theme}` }>
            <div className='detail'>
                <Header />

                <Typography />
                <Platform />

                <Space />

                <Notice />
                <Space />
                <Carousel />
                <Twitter />

                <Space />
                <Space />
                <Space />
                <Space />
                {/* { loading ? (<p>s</p>) : (<p>o</p>) } */}
            </div>
        </div>
    )
}
export default Home;
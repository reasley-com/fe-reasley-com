import { useEffect, useState } from "react";
import Header from '../components/Header'
import Notice from "../components/Notice";
import Platform from "../components/Platform";
import Space from "../components/Space";
import Typography from "../components/Typography";
import Carousel from "../components/Carousel";
import Twitter from "../components/Twitter";

function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    setLoading(false)
  }, [])

  return (
    <div className='theme-light'>
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
  )
}
export default Home;
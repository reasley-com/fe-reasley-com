import { useEffect, useState } from "react";
import Header from '../components/Header'
import Notice from "../components/Notice";
import Slider from "../components/Slider";
import Platform from "../components/Platform";
import Space from "../components/Space";
import Typography from "../components/Typography";

function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    setLoading(false)
  }, [])

  return (
    <div class='theme-light'>
      <Header />

      <Typography />
      <Platform />

      <Space />

      <Notice />
      <Slider />
      {/* { loading ? (<p>s</p>) : (<p>o</p>) } */}
    </div>
  )
}
export default Home;
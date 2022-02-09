import { useEffect, useState } from "react";
import Header from '../components/Header'
import Notice from "../components/Notice";
import Platform from "../components/Platform";
import Typography from "../components/Typography";

function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    setLoading(false)
  }, [])

  return (
    <div>
      <Header />

      <Typography />
      <Platform />

      <Notice />
      {/* { loading ? (<p>s</p>) : (<p>o</p>) } */}
    </div>
  )
}
export default Home;
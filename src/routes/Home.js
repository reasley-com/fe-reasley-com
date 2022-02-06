import { useEffect, useState } from "react";
import Header from '../components/Header'
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
      { loading ? (<p>s</p>) : (<p>o</p>) }
    </div>
  )
}
export default Home;
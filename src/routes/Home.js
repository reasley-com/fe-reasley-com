import { useEffect, useState } from "react";
import Header from '../components/Header'

function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => { 
    setLoading(false)
  }, [])

  return (
    <div>
      <Header />
      { loading ? (<p>s</p>) : (<p>o</p>) }
    </div>
  )
}
export default Home;
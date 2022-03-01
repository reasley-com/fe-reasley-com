import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/Home'
import Blog from "./routes/Blog";
import Post from "./routes/Post";
import { ThemeProvider } from "./content/ThemeContext";
import { MusicProvider } from "./content/MusicContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <MusicProvider>
          <Switch>
            <Route path='/service'>
            </Route>

            <Route path='/project'>
            </Route>

            <Route path='/blog'>
              <Blog />
            </Route>

            <Route path='/post/:id'>
              <Post />
            </Route>

            <Route path='/category/:id'>
            </Route>

            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </MusicProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App;

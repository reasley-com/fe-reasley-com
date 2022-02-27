import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/Home'
import Blog from "./routes/Blog";
import { ThemeProvider } from "./content/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Switch>
          <Route path='/service'>
          </Route>

          <Route path='/project'>
          </Route>

          <Route path='/blog'>
            <Blog />
          </Route>

          <Route path='/post/:id'>
          </Route>

          <Route path='/category/:id'>
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App;

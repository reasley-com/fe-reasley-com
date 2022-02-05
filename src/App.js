import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/Home'
import Blog from "./routes/Blog";

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App;

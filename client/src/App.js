import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/`} />
        </Route>
        <Route path="/documents/">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import "./App.css"
import PostsList from "./components/PostsList"
import { BrowserRouter as Router, Route } from "react-router-dom"
import PostDetail from "./components/PostDetail"

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => {
            return <div>Home</div>
          }}
        />
        <Route exact path="/posts" component={PostsList} />
        <Route exact path="/posts/:postId" component={PostDetail} />
      </div>
    </Router>
  )
}

export default App

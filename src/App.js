import React from 'react';
import Main from './Main'
import { Route, Switch } from 'react-router'
import CreateBlog from './CreateBlog.js';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <div className="ui container comments">
        <Switch>
          <Route
            exact path={"/create-blog"}
            render={(props) => <CreateBlog {...props} />}
          />
          <Route exact path={"/"}>
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
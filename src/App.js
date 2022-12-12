import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import NotFoundPage from './components/NotFoundPage'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default App

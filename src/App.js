import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import CourseItemDetails from './CourseItemDetails'
import NotFound from './NotFound'
import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App

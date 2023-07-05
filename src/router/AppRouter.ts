import {
  BrowserRouter as Router,
  Route,
  Switch,
  Suspense,
} from 'react-router-dom'
import routes from './routes'

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(({ path, Component, exact = false }) => (
            <Route key={path || '/not-found'} exact={exact} path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Suspense>
    </Router>
  )
}

export default AppRouter

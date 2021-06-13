import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AuthLink from '../pages/AuthLink/AuthLink';

function App() {
  return (
    <div className="App">
      <Router>
        <Route
            path={['/','/status/:status']}
            component={Home}
            exact={true}
          />
        
        <Route
            path={['/auth','/auth/:url']}
            component={AuthLink}
            exact={true}
          />
      </Router>
    </div>
  );
}

export default App;

import './assets/css/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './Routers';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((config: any, i: any) => (
          <Route key={i} {...config} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

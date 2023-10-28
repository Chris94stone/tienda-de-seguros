import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/category/:id" exact component={ItemListContainer} />
          <Route path="/item/:id" exact component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



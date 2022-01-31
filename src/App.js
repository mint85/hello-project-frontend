import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Ideas from './pages/Ideas';
import NewForm from './pages/NewForm';


import './App.css';

function App() {

  const URL = "https://localhost:3001";
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route exact path='/'>
         <Home />
       </Route>
       <Route path="/ideas">
         <Ideas URL={URL} />
       </Route>
       <Route path="/newform">
         <NewForm />
       </Route>
     </Switch>
     <Footer />
    </div>
  );
}

export default App;

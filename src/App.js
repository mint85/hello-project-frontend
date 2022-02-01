import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import {useState, useEffect} from "react";

import Home from './pages/Home';
import Ideas from './pages/Ideas';
import NewForm from './pages/NewForm';


import './App.css';

function App() {

  // Create state to hold Ideas data
   const [ideas, setIdeas] = useState(null);

  const URL = "https://hello-project-backend.herokuapp.com/";

  // Create function to make api call to obtain Ideas data from database
  const getIdeasData = async () => {
    const response = await fetch(URL + "ideas");
    const data = await response.json();
    setIdeas(data);
  };

const createIdeasData = async(idea) => {
  await fetch(URL + "ideas", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(idea)
  });

  getIdeasData();
}



  // Make initial call for data inside a useEffect
  // This will only happen once on component load
  useEffect(() => getIdeasData(), []);
  
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route exact path='/'>
         <Home />
       </Route>
       <Route path="/ideas">
         <Ideas ideas={ideas} />
       </Route>
       <Route path="/newform">
         <NewForm ideas={ideas} createIdeasData={createIdeasData}/>
       </Route>
     </Switch>
     <Footer />
    </div>
  );
}

export default App;

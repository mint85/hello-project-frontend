import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import {useState, useEffect} from "react";

import Home from './pages/Home';
import Ideas from './pages/Ideas';
import NewForm from './pages/NewForm';
import EditForm from './pages/EditForm';


import './App.css';

function App() {

  // Create state to hold Ideas data
   const [ideas, setIdeas] = useState(null);

  const URL = "https://hello-project-backend.herokuapp.com/";

  // Create function to make api call to obtain Ideas data from database
  const getIdeas = async () => {
    const response = await fetch(URL + "ideas");
    const data = await response.json();
    setIdeas(data);
  };

const createIdeas = async(idea) => {
  await fetch(URL + "ideas", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(idea)
  });

  getIdeas();
}

const updateIdeas = async(idea, id) => {
  await fetch(URL + "ideas/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(idea),
  });
  getIdeas();
}

  // Make initial call for data inside a useEffect
  // This will only happen once on component load
  useEffect(() => getIdeas(), []);
  
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route exact path='/'>
         <Home />
       </Route>
       <Route exact path="/ideas">
         <Ideas ideas={ideas} />
       </Route>
       <Route path="/newform">
         <NewForm ideas={ideas} createIdeasa={createIdeas}/>
       </Route>
       <Route 
       path="/ideas/:id"
       render={(rp) => (
         <EditForm
         ideas= {ideas}
         updateIdeas = {updateIdeas}
        // deleteIdea = {deleteIdea}
          {...rp}
          />
       )}
         />
     </Switch>
     <Footer />
    </div>
  );
}

export default App;

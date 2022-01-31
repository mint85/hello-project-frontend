import { useState, useEffect } from "react";

function Ideas(props) {

  // Create state to hold Ideas data
  const [ideas, setIdeas] = useState(null);

  // Create function to make api call to obtain Ideas data from database
  const getIdeasData = async () => {
    const response = await fetch(props.URL + "ideas");
    const data = await response.json();
    setIdeas(data);
  };

  // Make initial call for data inside a useEffect
  // This will only happen once on component load
  useEffect(() => getIdeasData(), []);

  // Function to return once we get the data from the backend
  const loaded = () => {
    return ideas.map((idea) => (
      <div className="idea-container">
        <p className="idea-title">{idea.name}</p>
        <img src={idea.img} alt={idea.name} />
        <div className="button-container">
          <button className="button">EDIT</button>
        </div>
      </div>
    ));
  };

  return ideas ? loaded() : <h1>Loading...</h1>;
}

export default Ideas;
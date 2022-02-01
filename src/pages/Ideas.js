import { Link } from "react-router-dom";

import "./Ideas.css";
import "../styles.css";

function Ideas(props) {
  // Function to return once we get the data from the backend
  const loaded = () => {
    return (
      <section className="ideas-flex-grid">
        {props.ideas.map((idea) => (
          <div key={idea._id} className="idea-container">
            <p className="idea-title">{idea.name}</p>
            <img className="idea-image" src={idea.img} alt={idea.name} />
            <div className="button-container">
              <Link to={`/ideas/${idea._id}`}>
                <button className="button">EDIT</button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    );
  };

  return props.ideas ? loaded() : <h1>Loading...</h1>;
}

export default Ideas;

import { Link } from "react-router-dom";

function Ideas(props) {
  // Function to return once we get the data from the backend
  const loaded = () => {
    return props.ideas.map((idea) => (
      <div key={idea._id} className="idea-container">
        <p className="idea-title">{idea.name}</p>
        <img src={idea.img} alt={idea.name} />
        <div className="button-container">
          <Link to={`/ideas/${idea._id}`}>
            <h3>EDIT</h3>
          </Link>
        </div>
      </div>
    ));
  };

  return props.ideas ? loaded() : <h1>Loading...</h1>;
}

export default Ideas;

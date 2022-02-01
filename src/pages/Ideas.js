function Ideas(props) {


  // Function to return once we get the data from the backend
  const loaded = () => {
    return props.ideas.map((idea) => (
      <div className="idea-container">
        <p className="idea-title">{idea.name}</p>
        <img src={idea.img} alt={idea.name} />
        <div className="button-container">
          <button className="button">EDIT</button>
        </div>
      </div>
    ));
  };

  return props.ideas ? loaded() : <h1>Loading...</h1>;
}

export default Ideas;
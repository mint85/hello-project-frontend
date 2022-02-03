import { useState } from "react";

function EditForm(props) {
  const id = props.match.params.id;
  const ideasData = props.ideas;
  const idea = ideasData.find((i) => i._id === id);

  const [editForm, setEditForm] = useState(idea);

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateIdeas(editForm, idea._id);
    props.history.push("/ideas");
  };

  const removeIdea = () => {
    props.deleteIdeas(idea._id);
    props.history.push("/ideas");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="Idea name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          value={editForm.img}
          name="img"
          placeholder="image URL"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <button id="delete" onClick={removeIdea}>
          DELETE
        </button>
      </form>
      <div className="background">
        <img
          src="https://i.ibb.co/fQx7Qpr/shutterstock-1924269197.png"
          alt="backgroundimage"
          className="background-image"
        ></img>
      </div>
    </section>
  );
}
export default EditForm;

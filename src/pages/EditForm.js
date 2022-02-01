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
        <input
          type="text"
          value={editForm.img}
          name="img"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
export default EditForm;

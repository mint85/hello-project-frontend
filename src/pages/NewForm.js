import { useState } from "react";

function NewForm(props) {
  const [form, setForm] = useState({
    name: "",
    img: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createIdeas(form);
    setForm({
      name: "",
      img: "",
    });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          name="name"
          placeholder="Idea name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={form.img}
          name="img"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input type="submit" value="Add idea" />
      </form>
    </section>
  );
}

export default NewForm;

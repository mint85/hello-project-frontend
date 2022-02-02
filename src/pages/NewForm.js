import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Form.css";

function NewForm(props) {
  const [form, setForm] = useState({
    name: "",
    img: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createIdeas(form);
    setForm({
      name: "",
      img: "",
    });
    history.push("/ideas");
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="Idea name"
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            value={form.img}
            name="img"
            placeholder="image URL"
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Add idea" />
        </div>
      </form>
    </section>
  );
}

export default NewForm;

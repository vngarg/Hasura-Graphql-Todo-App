import React from "react";
import Menu from "../components/Menu";
import { ADD_TODOS } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";
import { useMutation } from "@apollo/react-hooks";
import ShowTodo from "./ShowTodo";
import { Container } from "reactstrap";

import "./style.css";
import Footer from "../components/Footer/Footr";

const AddTodo = () => {
  const [addTodo] = useMutation(ADD_TODOS);

  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() && !description.trim()) return;

    var variables = {
      Title: title,
      Description: description,
    };

    addTodo({
      variables: variables,
      refetchQueries: [{ query: GET_TODOS }],
    }).then(() => {
      alert("Todo Added");
      setDescription("");
      setTitle("");
    });
  }
  return (
    <div>
      <Menu />
      <Container className="text-center">
        <h2 className="mt-4">Add a Todo</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="field"
            type="text"
            placeholder="Enter the Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <br />
          <br />
          <input
            className="field"
            type="text"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
          <br />
          <br />
          <button type="submit" className="btn">
            Create a Todo
          </button>
          <br />
          <br />
        </form>
        <ShowTodo />
      </Container>
      <Footer />
    </div>
  );
};

export default AddTodo;

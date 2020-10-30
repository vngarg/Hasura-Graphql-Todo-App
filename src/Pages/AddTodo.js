import React, { useState } from "react";
import Menu from "../components/Menu";
import { ADD_TODOS } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";
import { useMutation } from "@apollo/react-hooks";
import ShowTodo from "./ShowTodo";
import { Container } from "reactstrap";
import DateTimePicker from "react-datetime-picker";

import "./style.css";
import Footer from "../components/Footer/Footr";

const AddTodo = () => {
  const [addTodo] = useMutation(ADD_TODOS);

  const [startTime, onChange] = useState(new Date());
  const [endTime, changeEndTime] = useState(new Date());
  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() && !description.trim()) return;

    var variables = {
      Title: title,
      Description: description,
      StartTime: startTime,
      EndTime: endTime,
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
          <label>Start Time: &ensp;</label> 
          <DateTimePicker 
          onChange={onChange} 
          value={startTime} 
          format='dd-MM-y h:mm:ss a'
          yearPlaceholder='yy'
          monthPlaceholder='mm'
          dayPlaceholder='dd'
          hourPlaceholder='hr'
          minutePlaceholder='min'
          secondPlaceholder='ss'
          /><br /><br />
          <label>End Time: &ensp;</label> 
          <DateTimePicker 
          onChange={changeEndTime} 
          value={endTime} 
          format='dd-MM-y h:mm:ss a'
          yearPlaceholder='yy'
          monthPlaceholder='mm'
          dayPlaceholder='dd'
          hourPlaceholder='hr'
          minutePlaceholder='min'
          secondPlaceholder='ss'
          /><br /><br />
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

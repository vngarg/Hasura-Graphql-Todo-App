import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_TODOS } from "../graphql/queries";
import { TOGGLE_TODOS } from "../graphql/mutations";
import Loader from "react-loader-spinner";
import { Container, Row, Col } from "reactstrap";

const ShowTodo = () => {
  const { data, loading, error } = useQuery(GET_TODOS);
  const [toggleTodo] = useMutation(TOGGLE_TODOS);

  if (loading)
    return (
      <div>
        <h5>Please wait while we load the scheduled tasks.</h5>
        <Loader type="Rings" color="#20b2aa" height={100} width={100} />
      </div>
    );
  if (error) return <div>Something went wrong . . . . . .</div>;

  function handleToggleTodo({ id, DoneStatus }) {
    if (DoneStatus === "false") DoneStatus = "true";
    else DoneStatus = "false";

    const variables = {
      id,
      DoneStatus,
    };

    toggleTodo({ variables })
      .then((res) => {
        console.log("Todo updated, ", res);

        // Refresh the page after Todo item is deleted
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("Error in Toggle function, ", error);
      });
  }

  const DisplayTodo = () => {
    if (data.Todo.length === 0) {
      return <h1 className="text-center">No Tasks scheduled yet.</h1>;
    } else {
      return data.Todo.map((todo) => {
        const startDate = todo.StartTime.substring(0, 10);
        const starttime = todo.StartTime.substring(12, 19);
        const endDate = todo.EndTime.substring(0, 10);
        const endtime = todo.EndTime.substring(12, 19);
        var start = `${starttime}, ${startDate}`;
        var end = `${endtime}, ${endDate}`;

        return (
          <div className="todo" key={todo.id}>
            <Container>
              <Row>
                <Col sm={4} xl={1} className="close1">
                  <i
                    aria-hidden="true"
                    className="close link icon"
                    onClick={() => handleToggleTodo(todo)}
                  />
                </Col>
                <Col sm={8} xl={11} className="desc">
                  <strong>Title: </strong>
                  {todo.Title}
                  <br />
                  <strong>Description: </strong>
                  {todo.Description}
                  <br />
                  {/* <strong>Scheduled Time: </strong> */}
                  <span className='time'>
                  {start} to {end}
                  </span>
                  <br />
                </Col>
                <Col sm={4} xl={1} className="close2">
                  <i
                    aria-hidden="true"
                    class="close link icon"
                    onClick={() => handleToggleTodo(todo)}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
      });
    }
  };

  return <div className="text-left">{DisplayTodo()}</div>;
};

export default ShowTodo;

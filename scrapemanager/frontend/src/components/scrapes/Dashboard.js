import React, { Fragment } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import Form from "./Form";
import Scrapes from "./Scrapes";

const Dashboard = () => {
  const onDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.2s ease";
  };
  const onDragUpdate = (update) => {
    const { destination } = update;
    const opacity = 0.5;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  };
  const onDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    return;
  };

  return (
    <Fragment>
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Form />
        <Scrapes />
      </DragDropContext>
    </Fragment>
  );
};

export default Dashboard;

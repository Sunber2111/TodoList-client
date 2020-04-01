import React from "react";
import { Grid, Segment, Label } from "semantic-ui-react";
import { getValues } from "../../app/models/RulesColor";

const Task = ({ task }) => {
  const title = getValues(task.status);

  return (
    <Grid.Column>
      <Segment>
        <div className="title">
          <h2 style={{ display: "inline" }}>{task.title}</h2>
          <Label color={title.color} content={title.title} className="level"></Label>
        </div>
        <div className="content">{task.description}</div>
        <Label>4/4/2020</Label>
        <a className="view">View</a>
      </Segment>
    </Grid.Column>
  );
};

export default Task;

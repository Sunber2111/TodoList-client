import React,{useContext} from "react";
import { Container, Grid } from "semantic-ui-react";
import tasksStore from "../../store/tasksStore";
import { observer } from "mobx-react-lite";
import Task from '../../../features/task/Task'

const Tasks = () => {
  const { tasks } = useContext(tasksStore);
  return (
    <Container>
      <Grid columns={3}>
          {
            tasks.map(task =><Task task={task} />)
          }
      </Grid>
    </Container>
  );
};

export default observer(Tasks);


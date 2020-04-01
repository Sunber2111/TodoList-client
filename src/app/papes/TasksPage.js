import React, { useEffect, useContext, Fragment } from "react";
import tasksStore from "../store/tasksStore";
import Tasks from "../containers/tasks/Tasks";
import { observer } from "mobx-react-lite";
import { Transition } from "semantic-ui-react";
import Loading from "../layout/Loading";

const TasksPage = () => {
  const { fetchTasks, isLoad } = useContext(tasksStore);

  useEffect(() => {
    fetchTasks();
  }, []);

  if(isLoad)
    return <Loading content='Loading Tasks ....' />

  return (
    <Fragment>
       <div  style={{backgroundColor:'#f6f6f6',height:'100vh'}}>
         <Tasks/>
       </div>
    </Fragment>
  );
};

export default observer(TasksPage);

import { decorate, observable, action, runInAction } from "mobx";
import { createContext } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/";

class TaskStore {
  tasks = [];
  isLoad = true;
  fetchTasks = async () => {
    this.isLoad = true;
    try {
      const tasks = await axios.get("task");
      runInAction(() => {
        this.tasks = tasks.data;
        this.isLoad = false;
      });
    } catch (error) {
      throw error;
    }
  };
}

// observable lưu giá trị của biến
// observable.shallow lưu giá trị của vùng nhớ => array và obj
decorate(TaskStore, {
  tasks: observable.shallow,
  fetchTasks: action,
  isLoad: observable
});

export default createContext(new TaskStore());

import React, { Component } from "react";
import "./App.css";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: "",
      editID: null,
      editValue: "",
    };
  }

  onChange = (tempValue) => {
    tempValue = tempValue.target.value;
    this.setState({ value: tempValue });
  };

  onAddTask = (tempValue) => {
    tempValue.preventDefault();
    const taskobj = {
      taskname: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({
        tasks: this.state.tasks.concat(taskobj),
        value: "",
      });
    }
  };

  onDeleteTask = (itemId) => {
    this.setState({
      tasks: this.state.tasks.filter((newTask) => newTask.id !== itemId),
    });
  };
  onEditChange = (tempValue) => {
    this.setState({ editValue: tempValue.target.value });
  };
  onEditTask = (id, currentName) => {
    this.setState({
      editID: id,
      editValue: currentName,
    });
  };
  onConfirm = (id) => {
    const updatedTask = this.state.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, taskname: this.state.editValue };
      }
      return task;
    });
    this.setState({
      tasks: updatedTask,
      editID: null,
      editValue: "",
    });
  };

  onCancel = () => {
    this.setState({
      editID: null,
      editValue: "",
    });
  };

  renderEdit = (task) => {
    return (
      <form>
        <input
          type="text"
          value={this.state.editValue}
          onChange={this.onEditChange}
        ></input>
        <button onClick={() => this.onConfirm(task.id)}>Confirm</button>
        <button onClick={this.onCancel}>Cancel</button>
      </form>
    );
  };

  render() {
    const tempList = this.state.tasks.map((task) => {
      let taskContent;
      if (this.state.editID === task.id) {
        taskContent = this.renderEdit(task);
      } else {
        {
          taskContent = (
            <div>
              {task.taskname}
              <button onClick={() => this.onDeleteTask(task.id)}>Delete</button>
              <button onClick={() => this.onEditTask(task.id, task.taskname)}>
                Edit
              </button>
            </div>
          );
        }
      }
      return <li key={task.id}>{taskContent}</li>;
    });
    return (
      <form className="todo-container">
        <input
          placeholder="Type your task"
          onChange={this.onChange}
          value={this.state.value}
        ></input>
        <button onClick={this.onAddTask}>Add task</button>
        <ul>{tempList}</ul>
      </form>
    );
  }
}

export default Main;

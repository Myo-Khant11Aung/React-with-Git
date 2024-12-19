import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "./taskActions";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
    };
  }

  onChange = (event) => {
    this.setState({ taskName: event.target.value });
  };

  onAddTask = (tempValue) => {
    tempValue.preventDefault();
    const task = {
      id: Date.now(),
      name: this.state.taskName,
    };
    this.props.addTask(task);
    this.setState({ taskName: "" });
  };

  render() {
    const taskInListForm = this.props.tasks.map((eachTask) => (
      <li key={eachTask.id}>{eachTask.name}</li>
    ));
    return (
      <form>
        <h1>To Do App</h1>
        <input
          placeholder="Type your task"
          onChange={this.onChange}
          value={this.state.taskName}
        ></input>
        <button onClick={this.onAddTask}>Add Task</button>
        <ul>{taskInListForm}</ul>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

// import React, { Component } from "react";
// import "./App.css";

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       value: "",
//       editID: null,
//       editValue: "",
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onAddTask = this.onAddTask.bind(this);
//     this.onDeleteTask = this.onDeleteTask.bind(this);
//     this.onEditChange = this.onEditChange.bind(this);
//     this.onEditTask = this.onEditTask.bind(this);
//     this.onConfirm = this.onConfirm.bind(this);
//     this.onCancel = this.onCancel.bind(this);
//     this.renderEdit = this.renderEdit.bind(this);
//   }

//   onChange = (event) => {
//     this.setState({ value: event.target.value });
//   };

//   onAddTask = (event) => {
//     event.preventDefault();
//     const taskobj = {
//       taskname: this.state.value,
//       id: Date.now(),
//     };
//     if (this.state.value.trim() !== "") {
//       this.setState((prevState) => ({
//         tasks: [...prevState.tasks, taskobj],
//         value: "",
//       }));
//     }
//   };

//   onDeleteTask = (itemId) => {
//     this.setState((prevState) => ({
//       tasks: prevState.tasks.filter((task) => task.id !== itemId),
//     }));
//   };

//   onEditChange = (event) => {
//     this.setState({ editValue: event.target.value });
//   };

//   onEditTask = (id, currentName) => {
//     this.setState({
//       editID: id,
//       editValue: currentName,
//     });
//   };

//   onConfirm = (id) => {
//     this.setState((prevState) => ({
//       tasks: prevState.tasks.map((task) =>
//         task.id === id ? { ...task, taskname: prevState.editValue } : task
//       ),
//       editID: null,
//       editValue: "",
//     }));
//   };

//   onCancel = () => {
//     this.setState({
//       editID: null,
//       editValue: "",
//     });
//   };

//   renderEdit = (task) => (
//     <form onSubmit={(event) => event.preventDefault()}>
//       <input
//         type="text"
//         value={this.state.editValue}
//         onChange={this.onEditChange}
//       />
//       <button type="button" onClick={() => this.onConfirm(task.id)}>
//         Confirm
//       </button>
//       <button type="button" onClick={this.onCancel}>
//         Cancel
//       </button>
//     </form>
//   );

//   render() {
//     const tempList = this.state.tasks.map((task) => (
//       <li key={task.id}>
//         {this.state.editID === task.id ? (
//           this.renderEdit(task)
//         ) : (
//           <div>
//             {task.taskname}
//             <button onClick={() => this.onDeleteTask(task.id)}>Delete</button>
//             <button onClick={() => this.onEditTask(task.id, task.taskname)}>
//               Edit
//             </button>
//           </div>
//         )}
//       </li>
//     ));

//     return (
//       <div className="todo-container">
//         <form onSubmit={this.onAddTask}>
//           <input
//             placeholder="Type your task"
//             onChange={this.onChange}
//             value={this.state.value}
//           />
//           <button type="submit">Add task</button>
//         </form>
//         <ul>{tempList}</ul>
//       </div>
//     );
//   }
// }

// export default Main;

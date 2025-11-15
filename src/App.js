import './App.css';
import { Component } from 'react'
import TodoEditor from "./components/TodoEditor"
import { TodoList } from "./components/TodoList"
import { Filter } from "./components/Filter"
import { Info } from "./components/Info"
import initialTodos from "./todo.json"

export default class App extends Component {
  state={
    todos: initialTodos,
    filter: '',
  }

  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  render() {
    const finishedTodos = this.state.todos.map(todo => todo.completed)
    return <>
        <Info allTodos={this.state.todos.length} finishedTodos={finishedTodos}/>
        <TodoEditor />
        <Filter />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </>
  }
}



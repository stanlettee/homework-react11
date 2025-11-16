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

  handleChange = (name) => {
    this.setState({filter: name});
  }

  checkboxCompleted = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    }))
  }

  addTodo = (name) => {
    const todoId = this.state.todos.length > 0 ? this.state.todos.length + 1 : 1
    const newTodo = {
      id: `id-${todoId}`,
      text: name,          
      completed: false 
    }
    
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }))
    console.log(newTodo)
  }


  render() {
    const visibleTodos = this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.filter.toLowerCase()));
    const finishedTodos = this.state.todos.filter(todo => todo.completed === true)
    return <div className="container">
        <Info allTodos={this.state.todos.length} finishedTodos={finishedTodos.length}/>
        <TodoEditor addTodo={this.addTodo}/>
        <Filter value={this.state.filter} handleChange={this.handleChange}/>
        <TodoList checkboxCompleted={this.checkboxCompleted} todos={visibleTodos} deleteTodo={this.deleteTodo}/>
    </div>
  }
}



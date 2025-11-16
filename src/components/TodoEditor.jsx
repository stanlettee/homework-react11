import styles from './TodoEditor.module.css'
import { Component } from 'react'

export default class TodoEditor extends Component {

     handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.input.value
        console.log(name);
        this.props.addTodo(name);
        form.reset();
    };




    render() {
        return <form onSubmit={this.handleSubmit}>
            <input className={styles.input} name="input"></input>
            <button className={styles.button} type="submit">Create</button>
        </form>
    }
}
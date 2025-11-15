import styles from './TodoEditor.module.css'
import { Component } from 'react'

export default class TodoEditor extends Component {
    state={
        textValue: '',
    }

    render() {
        return <form>
            <input className={styles.input} name="todo"></input>
            <button className={styles.button} type="submit">Create</button>
        </form>
    }
}
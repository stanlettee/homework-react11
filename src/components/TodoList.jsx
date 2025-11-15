import styles from './TotoList.module.css'

export const TodoList = ({todos, deleteTodo, checkboxCompleted}) => {
    console.log(todos)
    return <ul className={styles.list}>
        {todos.map((todo) => {
            return <li className={styles.item} key={todo.id}>
                <input onChange={() => checkboxCompleted(todo.id)} className={styles.input} type="checkbox" checked={todo.completed}/>
                <p className={styles.text}>{todo.text}</p>
                <button onClick={() => deleteTodo(todo.id)} className={styles.button}>Delete</button>
            </li>;
        })}
    </ul>
}
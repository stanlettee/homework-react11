import styles from './TotoList.module.css'

export const TodoList = ({todos, deleteTodo}) => {
    console.log(todos)
    return <ul className={styles.list}>
        {todos.map((todo) => {
            return <li key={todo.id}>
                <input className={styles.input} type="checkbox" name="checkbox" value={todo.completed}/>
                <p className={styles.text}>{todo.text}</p>
                <button onClick={() => deleteTodo(todo.id)} className={styles.button}>Delete</button>
            </li>;
        })}
    </ul>
}
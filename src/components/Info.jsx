import styles from "./Info.module.css"

export const Info = ({allTodos, finishedTodos}) => {
    return <div className={styles.div}>
        <p className={styles.text1}>Всього завдань: {allTodos}</p>
        <p className={styles.text2}>Виконано: {finishedTodos}</p>
    </div>
}
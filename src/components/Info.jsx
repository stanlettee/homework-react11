import styles from "./Info.module.css"

export const Info = () => {
    return <div className={styles.div}>
        <p className={styles.text1}>Всього завдань: </p>
        <p className={styles.text2}>Виконано: </p>
    </div>
}
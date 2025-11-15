import styles from "./Filter.module.css"

export const Filter = () => {
    return <div className={styles.div}>
        <p className={styles.text}>Фильтер по імені</p>
        <input className={styles.input} name="name-input"></input>
    </div>
}
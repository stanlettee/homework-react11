import styles from "./Filter.module.css"

export const Filter = ({handleChange, value}) => {
    return <div className={styles.div}>
        <p className={styles.text}>Фильтер по імені</p>
        <input value={value} onChange={(e) => {handleChange(e.target.value)}} className={styles.input} name="nameInput"></input>
    </div>
}
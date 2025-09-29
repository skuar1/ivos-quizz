import styles from './Header.module.css'
export default function Header(){
    return(
       <div className={styles.HeaderSec}>
            <h1>Quiz Interativo</h1>
            <span>Questão 1 de 10</span>

            <div>
                Tempo: 00:00
            </div>
        </div>
    )
}
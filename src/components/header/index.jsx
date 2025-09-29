import styles from './Header.module.css'
export default function Header(){
    return(
        // header que possui o h1, mostra a questão atual do usuário e a quanto tempo ele está nela
       <div className={styles.HeaderSec}>
            <h1>Quiz Interativo</h1>
            <span>Questão 1 de 10</span>

            <div>
                Tempo: 00:00
            </div>
        </div>
            //o tempo deve ser salvo em um array para aparecer no relatório final
    )
}
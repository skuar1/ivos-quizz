import questions from '../../data/questions'
import styles from './QuestionCard.module.css'

export default function QuestionCard(){
    return(
        <div className={styles.QuestionSec}>
            <h2>Questão aqui</h2>
            <div className={styles.AnswersField}>
                <button>as</button>
                <button>repostas</button>
                <button>ficam</button>
                <button>aqui</button>
            </div>
        </div>
    )
}

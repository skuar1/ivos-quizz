import questions from '../../data/questions'
import styles from './QuestionCard.module.css'

export default function QuestionCard(){
    return(
        // faz o display da pergunta
        <div className={styles.QuestionSec}>
            <h2>Questão aqui</h2>

            {/* container que armazena todos os botões com as respostas */}
            <div className={styles.AnswersField}>
                <button>as</button>
                <button>repostas</button>
                <button>ficam</button>
                <button>aqui</button>
            </div>
        </div>
            //deve armazenar o tempo e a resposta e mostra-los corrigidos na tela de relatório
    )
}

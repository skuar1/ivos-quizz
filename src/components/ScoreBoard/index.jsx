
export default function ScoreBoard(){
    return(
        <div>
            {/* divs que mostram os resultados gerais das respostas do usuário */}
            <div className="ScoreCard">
                Pergunta: questão aqui <br />
                Resposta: resposta inputada aqui <br />
                Resposta Correta: resposta correta aqui <br />
                Pontos: pontos aqui <br />
                Tempo: tempo aqui
                <div>
                    ❌errada/✔correta
                </div>
            </div>
                {/* deve aparecer para o usuário após a última resposta */}
        </div>
    )
}
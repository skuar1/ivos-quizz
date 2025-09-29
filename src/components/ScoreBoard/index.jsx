
export default function ScoreBoard(){
    return(
        <div>
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
        </div>
    )
}
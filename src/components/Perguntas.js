import { useState } from "react";
import setaVirar from "./assets/img/seta_virar.png"
import DECK from "./DECK";
import styled from "styled-components";
import setaPlay from "./assets/img/seta_play.png"

function Pergunta(props) {

    const { numero, pergunta, resposta } = props

    const [estadoPergunta, setEstadoPergunta] = useState("pergunta-fechada");
    const [mudarPergunta, setMudarPergunta] = useState([numero]);
    const [imagemPergunta, setImagemPergunta] = useState(setaPlay);
    
    if (estadoPergunta === "pergunta-fechada") {
        return (
            <PerguntaFechada>
                <p>{mudarPergunta}</p>
                <img src={imagemPergunta} alt={imagemPergunta} onClick={mostrarPergunta} />
            </PerguntaFechada>

        )
    } else if (estadoPergunta === "pergunta-aberta") {
        return (
            <PerguntaAberta>
                <p>{mudarPergunta}</p>
                <img src={imagemPergunta} alt={imagemPergunta} onClick={mostrarResposta} />
            </PerguntaAberta>
        )
    }


    function mostrarPergunta() {
        setEstadoPergunta("pergunta-aberta");
        setMudarPergunta(pergunta);
        setImagemPergunta(setaVirar);
    }

    function mostrarResposta() {
        setMudarPergunta(resposta);
        setImagemPergunta("");
    }




}

export default function Perguntas(props) {
    const {estadoPergunta, setEstadoPergunta, mudarPergunta, setMudarPergunta, imagemPergunta, setImagemPergunta} = props

    return (
        <>
            {DECK.map((p) => (<Pergunta key={p.numero} numero={p.numero} pergunta={p.pergunta} resposta={p.resposta} estadoPergunta={estadoPergunta} setEstadoPergunta={setEstadoPergunta} mudarPergunta={mudarPergunta} setMudarPergunta={setMudarPergunta} imagemPergunta={imagemPergunta} setImagemPergunta={setImagemPergunta}/>))}
        </>
    )
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;


    img {
    cursor: pointer;
    }

    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
  
    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.6px;
    color: #333333;
    }
  
    img{
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    }
  `